import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ChainlinkAggregatorV3Mock, CTokenMock } from "../typechain-types";

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const cTokenDeployment = await deploy("CTokenMock", {
    contract: "CTokenMock",
    from: deployer,
    log: true,
  });

  const cToken = (await hre.ethers.getContractAt(
    cTokenDeployment.abi,
    cTokenDeployment.address
  )) as CTokenMock;

  await deploy("CompoundMultiOracle", {
    contract: "CompoundMultiOracle",
    from: deployer,
    log: true,
  });

  // dai price
  await (
    await cToken.setExchangeRate(
      hre.ethers.utils.parseEther("2").mul(10000000000)
    )
  ).wait();
  // eth price
  await (
    await cToken.setBorrowIndex(
      hre.ethers.utils.parseEther("1").mul(10000000000)
    )
  ).wait();
};
deploy.tags = ["test", "oracle"];
deploy.dependencies = ["dependencies"];

export default deploy;
