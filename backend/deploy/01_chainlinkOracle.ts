import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ChainlinkAggregatorV3Mock } from "../typechain-types";
import { WAD } from "@yield-protocol/utils-v2/dist/constants";

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const daiOracleDeployment = await deploy("DaiChainlinkAggregatorV3Mock", {
    contract: "ChainlinkAggregatorV3Mock",
    from: deployer,
    log: true,
  });

  const wethOracleDeployment = await deploy("WethChainlinkAggregatorV3Mock", {
    contract: "ChainlinkAggregatorV3Mock",
    from: deployer,
    log: true,
  });

  await deploy("ChainlinkMultiOracle", {
    contract: "ChainlinkMultiOracle",
    from: deployer,
    log: true,
  });

  const daiOracle = (await hre.ethers.getContractAt(
    daiOracleDeployment.abi,
    daiOracleDeployment.address
  )) as ChainlinkAggregatorV3Mock;

  const wethOracle = (await hre.ethers.getContractAt(
    wethOracleDeployment.abi,
    wethOracleDeployment.address
  )) as ChainlinkAggregatorV3Mock;

  // dai price
  await daiOracle.setPrice(hre.ethers.utils.parseEther("1"));
  // eth price
  await wethOracle.setPrice(hre.ethers.utils.parseEther("4000"));
};
deploy.tags = ["test", "oracle"];
deploy.dependencies = ["dependencies"];

export default deploy;
