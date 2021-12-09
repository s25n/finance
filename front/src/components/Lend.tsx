import React, { useContext } from "react";
import { Web3Context } from "../providers/Web3Provider";
import layerIcon from "../assets/images/layers.png";
import daiIcon from "../assets/images/dai.png";
import "./css/modeBox.css";
import { ProxyContext } from "../providers/ProxyProvider";

interface Props {}

const Lend = (props: Props) => {
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
          ></input>
        </div>
        <button className="button-submit" onClick={confirmButtonHandler}>
          {connected ? !isProxy ? "First, create a s25n proxy" : "Confirm" : "Connet Wallet"}
        </button>
      </div>
    </div>
  );
};

export default Lend;
