import React from "react";
import "./css/header.css";

interface Props {}

const Header = (props: Props) => {
  return (
    <header>
      <p className="logo">s25n Finance</p>
      <button className="button-wallet-connect">
        <div className="button-wallet-connect-box">Connect Wallet</div>
      </button>
    </header>
  );
};

export default Header;
