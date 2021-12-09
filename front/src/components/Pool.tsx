import React, { useContext, useState } from "react";
import { Web3Context } from "../providers/Web3Provider";
import layerIcon from "../assets/images/layers.png";
import daiIcon from "../assets/images/dai.png";
import "./css/modeBox.css";
import StyledTextBox from "./StyledTextBox";
import { ProxyContext } from "../providers/ProxyProvider";

interface Props {}

interface State {
  tokens: number;
  share: number;
  liquidity: number;
}

const Pool = (props: Props) => {
  const { connected, address, reset, connect } = useContext(Web3Context);
  const { isProxy, build } = useContext(ProxyContext);
  const confirmButtonHandler = () => {
    if (!connected) {
      connect();
    } else if (!isProxy) {
      build();
    } else {
    }
  };

  const initialState = { tokens: 0.0, share: 0, liquidity: 2.2 };

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
          <div className="value-box-container">
            {connected && (
              <>
                <StyledTextBox
                  title={"Your Pool Tokens"}
                  subtitle={"owned this series"}
                  value={`${state.tokens}`}
                />
                <StyledTextBox
                  title={"Your Pool share"}
                  subtitle={"of total tokens"}
                  value={`${state.share}%`}
                />
              </>
            )}
            <StyledTextBox
              title={"Total Liquidity"}
              subtitle={"staked in this series"}
              value={`${state.liquidity}M Tokens`}
            />
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
          Add Liquidity
        </span>
        <div className="lend-input-box">
          <div style={{ padding: 5 }}>
            <img src={daiIcon} alt={"dai"} width={20} height={20} />
          </div>
          <input
            className="input-lend-amount"
            placeholder={"Enter the amount of DAI Liquidity to add"}
            disabled={!connected}
          ></input>
        </div>
        <button className="button-submit" onClick={confirmButtonHandler}>
          {connected
            ? !isProxy
              ? "First, create a s25n proxy"
              : "Confirm"
            : "Connet Wallet"}
        </button>
      </div>
    </div>
  );
};

export default Pool;
