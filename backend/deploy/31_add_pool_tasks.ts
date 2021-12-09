import { id } from "@yield-protocol/utils-v2";
import { ethers } from "ethers";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import {
  Cauldron,
  ERC20Test,
  FYToken,
  Ladle,
  Pool,
  Wand,
} from "../typechain-types";
import { DAI, ETH } from "../utils/constants";
import { getContract } from "../utils/getContract";

async function initPool(
  owner: string,
  pool: Pool,
  base: ERC20Test,
  fyToken: FYToken
) {
  await base.faucet();
  await fyToken.grantRole(
    id(fyToken.interface, "mint(address,uint256)"),
    owner
  ); // Only test environment
  await fyToken.mint(pool.address, ethers.utils.parseEther("1").mul(1100000));
  await pool.sync();

  return pool;
}

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();

  const weth = (await getContract(hre, "MockWeth")) as ERC20Test;

  const cauldron = (await getContract(hre, "Cauldron")) as Cauldron;
  const ladle = (await getContract(hre, "Ladle")) as Ladle;
  const wand = (await getContract(hre, "Wand")) as Wand;

  const currentBlock = await hre.ethers.provider.getBlock("latest");
  const maturity = currentBlock.timestamp + 86400 * 90; // 3 months

  const seriesId = ethers.utils.hexlify(ethers.utils.randomBytes(6));

  await wand.addSeries(seriesId, ETH, maturity, [DAI], seriesId, seriesId);

  const pool = (await hre.ethers.getContractAt(
    "Pool",
    await ladle.pools(seriesId)
  )) as Pool;

  const fyToken = (await hre.ethers.getContractAt(
    "FYToken",
    (
      await cauldron.series(seriesId)
    ).fyToken
  )) as FYToken;

  await initPool(deployer, pool, weth, fyToken);

  await fyToken.grantRoles(
    [
      id(fyToken.interface, "mint(address,uint256)"),
      id(fyToken.interface, "burn(address,uint256)"),
      id(fyToken.interface, "point(bytes32,address)"),
    ],
    deployer
  ); // Only test environment
};

deploy.tags = ["test", "init"];
deploy.dependencies = ["auth"];

export default deploy;
