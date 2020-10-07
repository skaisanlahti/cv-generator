import React from "react";
import FormField from "./FormField";

const Experience = (props) => {
  return (
    <div>
      <FormField
        placeholder="Company"
        fieldType="text"
        isSubmitted={props.isSubmitted}
      />
      <FormField
        placeholder="Title"
        fieldType="text"
        isSubmitted={props.isSubmitted}
      />
      <FormField fieldType="date" isSubmitted={props.isSubmitted} />
      <FormField fieldType="date" isSubmitted={props.isSubmitted} />
    </div>
  );
};

export default Experience;
