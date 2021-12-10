import React, { useContext, useState } from "react";
import { Web3Context } from "../providers/Web3Provider";
import layerIcon from "../assets/images/layers.png";
import daiIcon from "../assets/images/dai.png";
import ethIcon from "../assets/images/eth.png";

import "./css/modeBox.css";
import { FYToken__factory, Ladle__factory, Pool__factory } from "../typechain-types";
import contracts from "../envs/contracts";
import { constants, utils } from "ethers";
import series from "../envs/series";
import { ETH } from "../envs/constants";

interface Props {}

const Borrow = (props: Props) => {
  const { connected, address, provider, connect } = useContext(Web3Context);
  const [ethAmount, setEthAmount] = useState<string>("0");
  const [daiAmount, setDaiAmount] = useState<string>("0");

  const confirmButtonHandler = () => {
    if (!connected) {
      connect();
    } else {
      if (!provider) return;

      const ILadle = new utils.Interface(Ladle__factory.abi)
      const IPool = new utils.Interface(Pool__factory.abi);

      Ladle__factory
        .connect(contracts.Ladle, provider.getSigner(address))
        .batch([
          ILadle.encodeFunctionData('build', [series[0], ETH, 0]),
          ILadle.encodeFunctionData(
            'pour',
            [
              '0x' + '00'.repeat(12),
              address,
              utils.parseEther(ethAmount),
              utils.parseEther(daiAmount)
            ]
          ),
          ILadle.encodeFunctionData('transfer', [
            contracts.FyToken,
            contracts.Pool,
            utils.parseEther(daiAmount)
          ]),
          ILadle.encodeFunctionData('route', [
            contracts.Pool,
            IPool.encodeFunctionData('sellFYToken', [
              address,
              constants.Zero
            ])
          ])
        ])
    }
  };

  return (
    <div className="mode-container">
      <div className="mode-color-box">
        <div className="mode-color-box-contents">
          <div className="mode-color-box-series">
            <div className="mode-series">
              <div className="series-apy">
                <span style={{ fontSize: 30 }}>7.00%</span>
              </div>
              <span
                style={{
                  fontFamily: "LexendDeca",
                  top: 0,
                  height: 30,
                  fontSize: 20,
                  color: "#343434",
                  flex: 3,
                }}
              >
                December 2021
              </span>
            </div>
            <div style={{ width: 100, minWidth: 30 }} />
            <button className="button-series">
              <div className="button-series-content">
                <img src={layerIcon} alt="" width="15" height="15" />
                <span
                  style={{
                    alignSelf: "center",
                    textAlign: "center",
                    verticalAlign: "center",
                    top: 0,
                    height: 30,
                    fontSize: 13,
                    lineHeight: 2,
                    color: "#343434",
                  }}
                >
                  Change Series
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="mode-detail-box">
        <span
          style={{
            fontFamily: "LexendDeca",
            top: 0,
            height: 30,
            fontSize: 20,
            color: "#343434",
            flex: 3,
            textAlign: "left",
          }}
        >
          Amount to deposit
        </span>
        <div className="borrow-input-box">
          <div style={{ padding: 5 }}>
            <img src={ethIcon} alt={"eth"} width={20} height={20} />
          </div>
          <input
            className="input-borrow-amount"
            placeholder={"Enter the ETH amount to deposit"}
            disabled={!connected}
            onChange={({target}) => {
              setEthAmount(target.value)
            }}
            value={ethAmount}
          ></input>
        </div>
      </div>
      <div className="mode-detail-box">
        <span
          style={{
            fontFamily: "LexendDeca",
            top: 0,
            height: 30,
            fontSize: 20,
            color: "#343434",
            flex: 3,
            textAlign: "left",
          }}
        >
          Borrow details
        </span>
        <div className="borrow-input-box">
          <button className="button-select-asset">
            <img src={daiIcon} alt={"dai"} width={20} height={20} />
            DAI
          </button>
          <input
            className="input-borrow-amount"
            placeholder={"Enter the amount of DAI to borrow"}
            disabled={!connected}
            onChange={({target}) => {
              setDaiAmount(target.value)
            }}
            value={daiAmount}
          ></input>
        </div>
        <button className="button-submit" onClick={confirmButtonHandler}>
          {connected ? "Confirm" : "Connet Wallet"}
        </button>
      </div>
    </div>
  );
};

export default Borrow;
