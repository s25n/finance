import React, { useContext, useEffect, useState } from "react";
import { Web3Context } from "../providers/Web3Provider";
import layerIcon from "../assets/images/layers.png";
import daiIcon from "../assets/images/dai.png";
import "./css/modeBox.css";
import StyledTextBox from "./StyledTextBox";
import { BigNumber } from "@ethersproject/bignumber";
import { constants, utils } from "ethers";
import { ERC20__factory } from "../typechain-types";
import contracts from "../envs/contracts";

interface Props {}

interface State {
  portfolio: string;
  current: string;
}

const Lend = (props: Props) => {
  const { connected, address, provider, connect } = useContext(Web3Context);
  const [allowance, setAllownace] = useState<BigNumber>(constants.Zero);
  const [amount, setAmount] = useState<string>("0");
  const confirmButtonHandler = () => {
    if (!connected) {
      connect();
    } else if (utils.parseEther(amount || '0').gt(allowance)) {
      if (!provider) return;

      ERC20__factory
        .connect(contracts.Dai, provider.getSigner())
        .increaseAllowance(contracts.Ladle, constants.MaxUint256)
        .then((tx) => {
          tx.wait().then(() => {
            setAllownace(constants.MaxUint256)
          })
        })
    } else {
    }
  };

  useEffect(() => {
    if (connected && address && provider) {
      ERC20__factory
      .connect(contracts.Dai, provider.getSigner())
      .allowance(address, contracts.Ladle)
      .then((allowance) => {
        setAllownace(allowance)
      })
    }
  }, [connected, address, provider])

  const initialState = { portfolio: "0.00", current: "0.00" };

  const [state, setState] = useState(initialState);

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
          {connected && (
            <div className="value-box-container">
              <StyledTextBox
                title={"Portfolio Value"}
                subtitle={"at maturity"}
                value={`${state.portfolio} DAI`}
              />
              <StyledTextBox
                title={"Current Value"}
                subtitle={"if closing your position now"}
                value={`${state.current} DAI`}
              />
            </div>
          )}
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
          Amount to lend
        </span>
        <div className="lend-input-box">
          <div style={{ padding: 5 }}>
            <img src={daiIcon} alt={"dai"} width={20} height={20} />
          </div>
          <input
            className="input-lend-amount"
            placeholder={"Enter the amount of DAI to lend"}
            disabled={!connected}
            onChange={({ target }) => { setAmount(target.value) }}
            value={amount}
          ></input>
        </div>
        <button className="button-submit" onClick={confirmButtonHandler}>
          {
            connected ?
              allowance.gte(utils.parseEther(amount || "0"))
                ? "Confirm" : "Approve s25n protocol" : "Connet Wallet"
          }
        </button>
      </div>
    </div>
  );
};

export default Lend;
