import React from "react";
import FormField from "./FormField";

const Experience = (props) => {
  return (
    <div>
      <FormField fieldType="text" isSubmitted={props.isSubmitted} />
      <FormField fieldType="text" isSubmitted={props.isSubmitted} />
      <FormField fieldType="date" isSubmitted={props.isSubmitted} />
      <FormField fieldType="date" isSubmitted={props.isSubmitted} />
    </div>
  );
};

export default Experience;
