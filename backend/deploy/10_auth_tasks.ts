import { id, constants } from "@yield-protocol/utils-v2";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import {
  Cauldron,
  ChainlinkMultiOracle,
  ERC20Test,
  FYTokenFactory,
  JoinFactory,
  Ladle,
  PoolFactory,
  Wand,
  Witch,
} from "../typechain-types";
import { getContract } from "../utils/getContract";

async function cauldronGovAuth(cauldron: Cauldron, receiver: string) {
  await cauldron.grantRoles(
    [
      id(cauldron.interface, "addAsset(bytes6,address)"),
      id(cauldron.interface, "addSeries(bytes6,bytes6,address)"),
      id(cauldron.interface, "addIlks(bytes6,bytes6[])"),
      id(
        cauldron.interface,
        "setDebtLimits(bytes6,bytes6,uint96,uint24,uint8)"
      ),
      id(cauldron.interface, "setLendingOracle(bytes6,address)"),
      id(cauldron.interface, "setSpotOracle(bytes6,bytes6,address,uint32)"),
    ],
    receiver
  );
}

async function cauldronLadleAuth(cauldron: Cauldron, receiver: string) {
  await cauldron.grantRoles(
    [
      id(cauldron.interface, "build(address,bytes12,bytes6,bytes6)"),
      id(cauldron.interface, "destroy(bytes12)"),
      id(cauldron.interface, "tweak(bytes12,bytes6,bytes6)"),
      id(cauldron.interface, "give(bytes12,address)"),
      id(cauldron.interface, "pour(bytes12,int128,int128)"),
      id(cauldron.interface, "stir(bytes12,bytes12,uint128,uint128)"),
      id(cauldron.interface, "roll(bytes12,bytes6,int128)"),
    ],
    receiver
  );
}

async function cauldronWitchAuth(cauldron: Cauldron, receiver: string) {
  await cauldron.grantRoles(
    [
      id(cauldron.interface, "give(bytes12,address)"),
      id(cauldron.interface, "slurp(bytes12,uint128,uint128)"),
    ],
    receiver
  );
}

async function ladleGovAuth(ladle: Ladle, receiver: string) {
  await ladle.grantRoles(
    [
      id(ladle.interface, "addJoin(bytes6,address)"),
      id(ladle.interface, "addPool(bytes6,address)"),
      id(ladle.interface, "addModule(address,bool)"),
      id(ladle.interface, "setFee(uint256)"),
    ],
    receiver
  );
}

async function wandAuth(wand: Wand, receiver: string) {
  await wand.grantRoles(
    [
      id(wand.interface, "addAsset(bytes6,address)"),
      id(wand.interface, "makeBase(bytes6,address)"),
      id(
        wand.interface,
        "makeIlk(bytes6,bytes6,address,uint32,uint96,uint24,uint8)"
      ),
      id(
        wand.interface,
        "addSeries(bytes6,bytes6,uint32,bytes6[],string,string)"
      ),
    ],
    receiver
  );
}

async function witchGovAuth(witch: Witch, receiver: string) {
  await witch.grantRoles(
    [
      id(witch.interface, "point(bytes32,address)"),
      id(witch.interface, "setIlk(bytes6,uint32,uint64,uint96,uint24,uint8)"),
    ],
    receiver
  );
}

async function joinFactoryAuth(joinFactory: JoinFactory, receiver: string) {
  await joinFactory.grantRoles(
    [id(joinFactory.interface, "createJoin(address)")],
    receiver
  );
}

async function fyTokenFactoryAuth(
  fyTokenFactory: FYTokenFactory,
  receiver: string
) {
  await fyTokenFactory.grantRoles(
    [
      id(
        fyTokenFactory.interface,
        "createFYToken(bytes6,address,address,uint32,string,string)"
      ),
    ],
    receiver
  );
}

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

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

  await cauldronLadleAuth(cauldron, ladle.address);
  await cauldronWitchAuth(cauldron, witch.address);
  await wandAuth(wand, deployer);
  await cauldronGovAuth(cauldron, wand.address);
  await ladleGovAuth(ladle, wand.address);
  await witchGovAuth(witch, wand.address);
  await joinFactoryAuth(joinFactory, wand.address);
  await fyTokenFactoryAuth(fyTokenFactory, wand.address);
  await chainlinkMultiOracle.grantRole(
    id(
      chainlinkMultiOracle.interface,
      "setSource(bytes6,address,bytes6,address,address)"
    ),
    wand.address
  );
  await chainlinkMultiOracle.grantRole(
    id(
      chainlinkMultiOracle.interface,
      "setSource(bytes6,address,bytes6,address,address)"
    ),
    deployer
  );

  await cauldronLadleAuth(cauldron, deployer);
  await joinFactoryAuth(joinFactory, deployer);
  await fyTokenFactoryAuth(fyTokenFactory, deployer);
  await cauldronGovAuth(cauldron, deployer);
  await ladleGovAuth(ladle, deployer);
  await witchGovAuth(witch, deployer);
};

deploy.tags = ["test", "auth"];
deploy.dependencies = ["vault"];

export default deploy;
