import { id } from "@yield-protocol/utils-v2";
import { ethers } from "ethers";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import {
  CompoundMultiOracle,
  CTokenMock,
  ERC20Test,
  Join,
  JoinFactory,
  Ladle,
  Wand,
} from "../typechain-types";
import { CHI, DAI, ETH, RATE } from "../utils/constants";
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
  await (
    await asset.approve(await ladle.joins(assetId), ethers.constants.MaxUint256)
  ).wait(); // Owner approves all joins to take from him. Only testing

  await (
    await join.grantRoles(
      [
        id(join.interface, "join(address,uint128)"),
        id(join.interface, "exit(address,uint128)"),
        id(join.interface, "retrieve(address,address)"),
        id(join.interface, "setFlashFeeFactor(uint256)"),
      ],
      owner
    )
  ).wait(); // Only test environment

  await (await asset.faucet()).wait();

  return join;
}

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const weth = (await getContract(hre, "MockWeth")) as ERC20Test;

  const dai = (await getContract(hre, "MockDai")) as ERC20Test;

  const ladle = (await getContract(hre, "Ladle")) as Ladle;
  const wand = (await getContract(hre, "Wand")) as Wand;
  const joinFactory = (await getContract(hre, "JoinFactory")) as JoinFactory;

  const compoundMultiOracle = (await getContract(
    hre,
    "CompoundMultiOracle"
  )) as CompoundMultiOracle;

  const cToken = (await getContract(hre, "CTokenMock")) as CTokenMock;
  await (await wand.addAsset(DAI, dai.address)).wait();
  await (await wand.addAsset(ETH, weth.address)).wait();
  await initAsset(hre, deployer, ladle, DAI, dai);
  await initAsset(hre, deployer, ladle, ETH, weth);
};

deploy.tags = ["test", "init"];
deploy.dependencies = ["auth"];

export default deploy;
