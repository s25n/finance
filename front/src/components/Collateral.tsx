import React, { useContext, useState } from "react";
import { Web3Context } from "../providers/Web3Provider";
import layerIcon from "../assets/images/layers.png";
import ethIcon from "../assets/images/eth.png";

import "./css/modeBox.css";
import { ProxyContext } from "../providers/ProxyProvider";

interface Props {}

const Collateral = (props: Props) => {
  const { connected, address, reset, connect } = useContext(Web3Context);
  const { isProxy, build } = useContext(ProxyContext);
  const confirmButtonHandler = () => {
    if (!connected) {
      connect();
    } else if(!isProxy) {
      build();
    } else {
    }
  };

  const [liquidity, setLiquidity] = useState(2.2);

  return (
    <div className="mode-container">
      <div className="mode-color-box-collateral">
        <div className="mode-color-box-contents">
          <div className="mode-color-box-series">
            <div className="mode-series">
              <span
                style={{
                  fontFamily: "LexendDeca",
                  top: 0,
                  height: 30,
                  fontSize: 20,
                  color: "#343434",
                  flex: 3,
                  marginLeft: 20,
                  marginRight: 100,
                }}
              >
                Manage ETH Collateral
              </span>
            </div>
            <div style={{ width: 100, minWidth: 30 }} />
          </div>
          <div className="pool-liquidity-box">
            <span style={{ fontFamily: "NotoSans-Medium", fontSize: 15 }}>
              Max Borrowing Power
            </span>
            <span style={{ fontFamily: "NotoSans-SemiLight", fontSize: 12 }}>
              based on your ETH Balance
            </span>
            <span style={{ fontFamily: "NotoSans-Medium", fontSize: 15 }}>
              {`${liquidity} DAI`}
            </span>
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
            <img src={ethIcon} alt={"dai"} width={20} height={20} />
          </div>
          <input
            className="input-borrow-amount"
            placeholder={"Enter the ETH amount to deposit"}
            disabled={!connected}
          ></input>
        </div>
        <button className="button-submit" onClick={confirmButtonHandler}>
          {connected ? !isProxy ? "First, create a s25n proxy" : "Confirm" : "Connet Wallet"}
        </button>
      </div>
    </div>
  );
};

export default Collateral;
