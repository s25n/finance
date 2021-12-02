import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ModeType } from "../enum/modeType";
import "./css/selectMode.css";

interface Props {}

const SelectMode = (props: Props) => {
  const currentMode = useLocation().pathname.substring(1);

  return (
    <div className="select-box">
      <ModeButton
        name={ModeType.BORROW}
        isCurrentMode={currentMode === ModeType.BORROW}
      />
      <ModeButton
        name={ModeType.LEND}
        isCurrentMode={currentMode === ModeType.LEND}
      />
      <ModeButton
        name={ModeType.POOL}
        isCurrentMode={currentMode === ModeType.POOL}
      />
    </div>
  );
};

interface ButtonProps {
  name: string;
  isCurrentMode: boolean;
}
const ModeButton = (buttonProps: ButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      className="button-mode"
      onClick={() => {
        navigate(`/${buttonProps.name}`);
      }}
      style={{
        color: buttonProps.isCurrentMode ? "#1c1c1c " : "gray",
      }}
    >
      {buttonProps.name.substring(0, 1).toUpperCase() +
        buttonProps.name.substring(1)}
    </button>
  );
};

export default SelectMode;
