import React from "react";

const SubmitButton = (props) => {
  if (props.isSubmitted) {
    return (
      <button className="submit-button red" onClick={props.handleSubmit}>
        Edit Form
      </button>
    );
  }
  return (
    <button className="submit-button green" onClick={props.handleSubmit}>
      Submit Form
    </button>
  );
};

export default SubmitButton;
