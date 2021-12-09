import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { id, constants } from "@yield-protocol/utils-v2";
import { WAD } from "@yield-protocol/utils-v2/dist/constants";
import { ethers } from "ethers";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import {
  Cauldron,
  ChainlinkAggregatorV3Mock,
  ChainlinkMultiOracle,
  ERC20Test,
  FYToken,
  FYTokenFactory,
  Join,
  JoinFactory,
  Ladle,
  PoolFactory,
  Wand,
  Witch,
} from "../typechain-types";
import { DAI, ETH } from "../utils/constants";
import { getContract } from "../utils/getContract";

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();

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

  const daiOracle = (await getContract(
    hre,
    "DaiChainlinkAggregatorV3Mock"
  )) as ChainlinkAggregatorV3Mock;

  const currentBlock = await hre.ethers.provider.getBlock("latest");
  const maturity = currentBlock.timestamp + 86400 * 90; // 3 months

  const seriesId = ethers.utils.hexlify(ethers.utils.randomBytes(6));

  await wand.addSeries(seriesId, ETH, maturity, [DAI], seriesId, seriesId);

  const fyToken = (await hre.ethers.getContractAt(
    "FYToken",
    (
      await cauldron.series(seriesId)
    ).fyToken
  )) as FYToken;

  console.log(fyToken.address);
};

deploy.tags = ["test", "init"];
deploy.dependencies = ["auth"];

export default deploy;
