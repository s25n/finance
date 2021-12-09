import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, get } = hre.deployments;

  const safeERC20Namer = await deploy("SafeERC20Namer", {
    contract: "SafeERC20Namer",
    from: deployer,
    log: true,
  });

  const yieldMath = await deploy("YieldMath", {
    contract: "YieldMath",
    from: deployer,
    log: true,
  });

  const cauldron = await deploy("Cauldron", {
    contract: "Cauldron",
    from: deployer,
    log: true,
  });

  const weth = await get("MockWeth");

  const ladle = await deploy("Ladle", {
    contract: "Ladle",
    args: [cauldron.address, weth.address],
    from: deployer,
    log: true,
  });

  const witch = await deploy("Witch", {
    contract: "Witch",
    args: [cauldron.address, ladle.address],
    from: deployer,
    log: true,
  });

  const joinFactory = await deploy("JoinFactory", {
    contract: "JoinFactory",
    from: deployer,
    log: true,
  });

  const poolFactory = await deploy("PoolFactory", {
    contract: "PoolFactory",
    from: deployer,
    libraries: {
      YieldMath: yieldMath.address,
      SafeERC20Namer: safeERC20Namer.address,
    },
    log: true,
  });

  const fyTokenFactory = await deploy("FYTokenFactory", {
    contract: "FYTokenFactory",
    from: deployer,
    libraries: {
      SafeERC20Namer: safeERC20Namer.address,
    },
    log: true,
  });

  const wand = await deploy("Wand", {
    contract: "Wand",
    from: deployer,
    args: [
      cauldron.address,
      ladle.address,
      witch.address,
      poolFactory.address,
      joinFactory.address,
      fyTokenFactory.address,
    ],
    log: true,
  });
};
deploy.tags = ["test", "vault"];
deploy.dependencies = ["oracle"];

export default deploy;
