import React, { useContext } from "react";
import "./css/header.css";
import { VscGear } from "react-icons/vsc";
import { Web3Context } from "../providers/Web3Provider";

interface Props {}

const Header = (props: Props) => {
  const { connected, address, reset, connect } = useContext(Web3Context);

  return (
    <div className="Header">
      <header>
        <div className="Left">
          <h1>s25n</h1>
        </div>
        <div className="Right">
          <button className="Connect" onClick={connected ? reset : connect}>
            <div>
              {connected
                ? address && `${address.slice(0, 4)}...${address.slice(-4)}`
                : "Connect a wallet"}
            </div>
            {connected && (
              <>
                <div style={{ width: 20 }}></div>
                <VscGear />
              </>
            )}
          </button>
        </div>
      </header>
    </div>
    // <header>
    //   <p className="logo">s25n Finance</p>
    //   <button className="button-wallet-connect">
    //     <div className="button-wallet-connect-box">Connect Wallet</div>
    //   </button>
    // </header>
  );
};

export default Header;
