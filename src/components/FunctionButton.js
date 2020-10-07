import React from "react";

function FunctionButton(props) {
  if (!props.isSubmitted) {
    return <button onClick={props.handleClick}>{props.text}</button>;
  }
  return null;
}

export default FunctionButton;
