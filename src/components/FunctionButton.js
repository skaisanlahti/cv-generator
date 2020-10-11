import React from "react";

const FunctionButton = (props) => {
  if (!props.isSubmitted) {
    return (
      <button className={props.color} onClick={props.handleClick}>
        {props.text}
      </button>
    );
  }
  return null;
};

export default FunctionButton;
