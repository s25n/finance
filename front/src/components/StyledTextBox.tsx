import React from "react";

interface Props {
  title: string;
  subtitle: string;
  value: string;
}

const StyledTextBox = (props: Props) => {
  return (
    <div className="styled-text-box">
      <span style={{ fontFamily: "NotoSans-Medium", fontSize: 15 }}>
        {props.title}
      </span>
      <span style={{ fontFamily: "NotoSans-SemiLight", fontSize: 12 }}>
        {props.subtitle}
      </span>
      <span style={{ fontFamily: "NotoSans-Medium", fontSize: 15 }}>
        {props.value}
      </span>
    </div>
  );
};

export default StyledTextBox;
