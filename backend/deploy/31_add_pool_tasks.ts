import { id } from "@yield-protocol/utils-v2";
import { constants, ethers } from "ethers";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Event } from "@ethersproject/contracts";
import {
  Cauldron,
  ERC20Test,
  FYToken,
  Ladle,
  Pool,
  Wand,
} from "../typechain-types";
import { DAI, ETH, SERIESID } from "../utils/constants";
import { getContract } from "../utils/getContract";
import { Result } from "@ethersproject/abi";

async function initPool(
  owner: string,
  pool: Pool,
  base: ERC20Test,
  fyToken: FYToken
) {
  await (await base.faucet()).wait();
  await (
    await fyToken.grantRole(
      id(fyToken.interface, "mint(address,uint256)"),
      owner
    )
  ).wait(); // Only test environment
  await (
    await fyToken.mint(pool.address, ethers.utils.parseEther("12300000"))
  ).wait();
  await (
    await base.transfer(pool.address, ethers.utils.parseEther("12300000"))
  ).wait();

  await (await pool.mint(owner, owner, 0, ethers.constants.MaxUint256)).wait();

  await (await pool.sync()).wait();

  return pool;
}

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();

  const weth = (await getContract(hre, "MockWeth")) as ERC20Test;
  const dai = (await getContract(hre, "MockDai")) as ERC20Test;

  const cauldron = (await getContract(hre, "Cauldron")) as Cauldron;
  const ladle = (await getContract(hre, "Ladle")) as Ladle;
  const wand = (await getContract(hre, "Wand")) as Wand;

  const currentBlock = await hre.ethers.provider.getBlock("latest");
  const maturity = currentBlock.timestamp + 86400 * 90; // 3 months

  const seriesId = SERIESID;

  console.log(123);

  await (
    await wand.addSeries(seriesId, DAI, maturity, [ETH], seriesId, seriesId)
  ).wait();

  console.log("add series done");

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

  //   const join = (await hre.ethers.getContractAt(
  //     "Join",
  //     await ladle.joins(ETH)
  //   )) as Join;

  await initPool(deployer, pool, dai, fyToken);

  console.log("init pool done");

  await (
    await fyToken.grantRoles(
      [
        id(fyToken.interface, "mint(address,uint256)"),
        id(fyToken.interface, "burn(address,uint256)"),
        id(fyToken.interface, "point(bytes32,address)"),
      ],
      deployer
    )
  ).wait(); // Only test environment
};

deploy.tags = ["test", "init"];
deploy.dependencies = ["auth"];

export default deploy;
