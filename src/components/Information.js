import React from "react";
import FormField from "./FormField";

const Information = (props) => {
  return (
    <div className="form-grid">
      <FormField
        placeholder="First Name"
        fieldType="text"
        isSubmitted={props.isSubmitted}
      />
      <FormField
        placeholder="Last Name"
        fieldType="text"
        isSubmitted={props.isSubmitted}
      />
      <FormField
        placeholder="Email"
        fieldType="text"
        isSubmitted={props.isSubmitted}
      />
      <FormField
        placeholder="Phone"
        fieldType="text"
        isSubmitted={props.isSubmitted}
      />
    </div>
  );
};

export default Information;
