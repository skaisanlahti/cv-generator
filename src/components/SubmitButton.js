import React from "react";

function SubmitButton(props) {
  if (props.isSubmitted) {
    return (
      <button className="submit-button" onClick={props.handleSubmit}>
        Edit Form
      </button>
    );
  }
  return (
    <button className="submit-button" onClick={props.handleSubmit}>
      Submit Form
    </button>
  );
}

export default SubmitButton;
