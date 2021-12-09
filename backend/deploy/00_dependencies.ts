import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("MockDai", {
    contract: "ERC20Test",
    args: ["DAI", "DAI_StableCoin"],
    from: deployer,
    log: true,
  });

  await deploy("MockWeth", {
    contract: "ERC20Test",
    args: ["WETH", "WrappedEther"],
    from: deployer,
    log: true,
  });
};
deploy.tags = ["test", "dependencies"];

export default deploy;
