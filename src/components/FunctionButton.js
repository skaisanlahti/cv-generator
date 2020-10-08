import React from "react";

function FunctionButton(props) {
  if (!props.isSubmitted) {
    return (
      <button className={props.color} onClick={props.handleClick}>
        {props.text}
      </button>
    );
  }
  return null;
}

export default FunctionButton;
