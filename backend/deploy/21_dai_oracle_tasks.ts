import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import {
  Cauldron,
  ChainlinkAggregatorV3Mock,
  ChainlinkMultiOracle,
  CompoundMultiOracle,
  CTokenMock,
  ERC20Test,
  FYTokenFactory,
  JoinFactory,
  Ladle,
  PoolFactory,
  Wand,
  Witch,
} from "../typechain-types";
import { CHI, DAI, ETH, RATE } from "../utils/constants";
import { getContract } from "../utils/getContract";

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();

  const weth = (await getContract(hre, "MockWeth")) as ERC20Test;

  const dai = (await getContract(hre, "MockDai")) as ERC20Test;

  const witch = (await getContract(hre, "Witch")) as Witch;
  const wand = (await getContract(hre, "Wand")) as Wand;
  const chainlinkMultiOracle = (await getContract(
    hre,
    "ChainlinkMultiOracle"
  )) as ChainlinkMultiOracle;

  const daiOracle = (await getContract(
    hre,
    "DaiChainlinkAggregatorV3Mock"
  )) as ChainlinkAggregatorV3Mock;

  await chainlinkMultiOracle.setSource(
    ETH,
    weth.address,
    DAI,
    dai.address,
    daiOracle.address
  );

  const compoundMultiOracle = (await getContract(
    hre,
    "CompoundMultiOracle"
  )) as CompoundMultiOracle;

  const cToken = (await getContract(hre, "CTokenMock")) as CTokenMock;

  await compoundMultiOracle.setSource(ETH, RATE, cToken.address);
  await compoundMultiOracle.setSource(ETH, CHI, cToken.address);

  await wand.makeBase(ETH, compoundMultiOracle.address);

  const ratio = 1000000; //  1000000 == 100% collateralization ratio

  await witch.setIlk(
    DAI,
    4 * 60 * 60,
    hre.ethers.utils.parseEther("1").div(2),
    1000000,
    0,
    18
  );
  await wand.makeIlk(
    ETH,
    DAI,
    chainlinkMultiOracle.address,
    ratio,
    1000000,
    1,
    18
  );
};

deploy.tags = ["test", "init"];
deploy.dependencies = ["auth"];

export default deploy;
