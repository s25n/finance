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
import { DAI, ETH } from "../utils/constants";
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
    await fyToken.mint(pool.address, ethers.utils.parseEther("1").mul(1100000))
  ).wait();
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

  const seriesId = ethers.utils.hexlify(ethers.utils.randomBytes(6));

  await (
    await wand.addSeries(seriesId, ETH, maturity, [DAI], seriesId, seriesId)
  ).wait();

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

  await initPool(deployer, pool, weth, fyToken);

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

  const accounts = await hre.ethers.getSigners();
  const account = accounts[1];

  const tx = await ladle.connect(account).build(seriesId, DAI, 1);

  const events = (await tx.wait()).events as Array<Event>;
  // events[0] is Transfer
  const result = events[0].args as Result;

  console.log(
    "event",
    events[0].topics[0], // ??
    events[0].topics[1], // vaultId
    events[0].topics[2], // owne
    events[0].topics[3],
    events[0].topics[4]
  );

  await weth.connect(account).faucet();
  await weth
    .connect(account)
    .approve(await ladle.joins(ETH), ethers.utils.parseEther("100000"));
  await dai.connect(account).faucet();
  await dai
    .connect(account)
    .approve(await ladle.joins(DAI), ethers.utils.parseEther("100000"));

  const vaultId = events[0].topics[1].slice(0, 26);

  console.log(vaultId);

  await ladle.connect(account).pour(
    vaultId,
    account.address,
    ethers.utils.parseEther("1000"), // deposit collateral
    ethers.utils.parseEther("100") // borrow amount (amount to mint fyToken)
  );

  await dai
    .connect(account)
    .approve(pool.address, ethers.utils.parseEther("100000"));

  await weth
    .connect(account)
    .transfer(pool.address, ethers.utils.parseEther("100000"));

  await dai
    .connect(account)
    .transfer(pool.address, ethers.utils.parseEther("100000"));

  await pool.sync();

  await pool
    .connect(account)
    .mint(account.address, account.address, 0, ethers.constants.MaxUint256);

  const minAmount = 1;

  await fyToken
    .connect(account)
    .transfer(pool.address, ethers.utils.parseEther("100"));

  await ladle
    .connect(account)
    .route(
      pool.address,
      pool.interface.encodeFunctionData("sellFYToken", [
        account.address,
        minAmount,
      ])
    );

  console.log(await (await dai.balanceOf(account.address)).toString());
};

deploy.tags = ["test", "init"];
deploy.dependencies = ["auth"];

export default deploy;
