import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { id, constants } from "@yield-protocol/utils-v2";
import { WAD } from "@yield-protocol/utils-v2/dist/constants";
import { ethers } from "ethers";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import {
  Cauldron,
  ChainlinkMultiOracle,
  ERC20Test,
  FYTokenFactory,
  Join,
  JoinFactory,
  Ladle,
  PoolFactory,
  Wand,
  Witch,
} from "../typechain-types";
import { DAI } from "../utils/constants";
import { getContract } from "../utils/getContract";

// Initialize an asset for testing purposes. Gives the owner powers over it, and approves the join to take the asset from the owner.
async function initAsset(
  hre: HardhatRuntimeEnvironment,
  owner: string,
  ladle: Ladle,
  assetId: string,
  asset: ERC20Test
): Promise<Join> {
  const join = (await hre.ethers.getContractAt(
    "Join",
    await ladle.joins(assetId)
  )) as Join;
  await asset.approve(await ladle.joins(assetId), ethers.constants.MaxUint256); // Owner approves all joins to take from him. Only testing

  await join.grantRoles(
    [
      id(join.interface, "join(address,uint128)"),
      id(join.interface, "exit(address,uint128)"),
      id(join.interface, "retrieve(address,address)"),
      id(join.interface, "setFlashFeeFactor(uint256)"),
    ],
    owner
  ); // Only test environment

  await asset.faucet();

  return join;
}

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const weth = (await getContract(hre, "MockWeth")) as ERC20Test;

  const dai = (await getContract(hre, "MockDai")) as ERC20Test;

  const cauldron = (await getContract(hre, "Cauldron")) as Cauldron;
  const witch = (await getContract(hre, "Witch")) as Witch;
  const ladle = (await getContract(hre, "Ladle")) as Ladle;
  const wand = (await getContract(hre, "Wand")) as Wand;
  const joinFactory = (await getContract(hre, "JoinFactory")) as JoinFactory;
  const poolFactory = (await getContract(hre, "PoolFactory")) as PoolFactory;
  const fyTokenFactory = (await getContract(
    hre,
    "FYTokenFactory"
  )) as FYTokenFactory;
  const chainlinkMultiOracle = (await getContract(
    hre,
    "ChainlinkMultiOracle"
  )) as ChainlinkMultiOracle;

  await wand.addAsset(DAI, dai.address);

  const joinAddress = (
    await joinFactory.queryFilter(
      joinFactory.filters.JoinCreated(dai.address, null)
    )
  )[0].args[1];
  const join = (await hre.ethers.getContractAt("Join", joinAddress)) as Join;

  await initAsset(hre, deployer, ladle, DAI, dai);

  await wand.makeBase(ETH);
};

deploy.tags = ["test", "init"];
deploy.dependencies = ["auth"];

export default deploy;
