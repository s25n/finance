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
import { DAI, ETH, SERIESID } from "../utils/constants";
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
    await base.transfer(pool.address, ethers.utils.parseEther("10000"))
  ).wait();
  await (
    await fyToken.mint(pool.address, ethers.utils.parseEther("10000"))
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

  const seriesId = SERIESID;

  console.log("series id", seriesId);

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

  console.log("fyToken address", fyToken.address);

  //   const join = (await hre.ethers.getContractAt(
  //     "Join",
  //     await ladle.joins(ETH)
  //   )) as Join;

  const accounts = await hre.ethers.getSigners();
  const account = accounts[0];

  const tx = await ladle.connect(account).build(seriesId, ETH, 1);

  console.log("build done");

  const events = (await tx.wait()).events as Array<Event>;
  // events[0] is Transfer
  // console.log(
  //   "event",
  //   events[0].topics[0], // ??
  //   events[0].topics[1], // vaultId
  //   events[0].topics[2], // owne
  //   events[0].topics[3],
  //   events[0].topics[4]
  // );
  const vaultId = events[0].topics[1].slice(0, 26);

  await (await weth.connect(account).faucet()).wait();
  await (
    await weth
      .connect(account)
      .approve(await ladle.joins(ETH), ethers.utils.parseEther("100000"))
  ).wait();
  await (await dai.connect(account).faucet()).wait();
  await (
    await dai
      .connect(account)
      .approve(await ladle.joins(DAI), ethers.utils.parseEther("100000"))
  ).wait();

  console.log("faucet done");

  await (
    await ladle.connect(account).pour(
      vaultId,
      account.address,
      ethers.utils.parseEther("1000"), // deposit collateral
      ethers.utils.parseEther("100") // borrow amount (amount to mint fyToken)
    )
  ).wait();

  console.log("pour done");

  await (
    await dai
      .connect(account)
      .approve(pool.address, ethers.utils.parseEther("100000"))
  ).wait();

  await (await pool.sync()).wait();

  await (
    await pool
      .connect(account)
      .mint(account.address, account.address, 0, ethers.constants.MaxUint256)
  ).wait();

  const minAmount = ethers.utils.parseEther("10");

  console.log(
    "dai balance before",
    (await dai.balanceOf(account.address)).toString()
  );

  await (
    await fyToken
      .connect(account)
      .mint(account.address, ethers.utils.parseEther("500"))
  ).wait();

  await (
    await fyToken
      .connect(account)
      .transfer(pool.address, ethers.utils.parseEther("500"))
  ).wait();

  await (
    await ladle
      .connect(account)
      .route(
        pool.address,
        pool.interface.encodeFunctionData("sellFYToken", [account.address, 0])
      )
  ).wait();

  console.log(
    "dai balance after",
    (await dai.balanceOf(account.address)).toString()
  );
};

deploy.tags = ["test", "init"];
deploy.dependencies = ["auth"];

export default deploy;
