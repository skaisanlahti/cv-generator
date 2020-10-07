import React from "react";
import FormField from "./FormField";

const Education = (props) => {
  return (
    <div>
      <FormField
        placeholder="School"
        fieldType="text"
        isSubmitted={props.isSubmitted}
      />
      <FormField
        placeholder="Diploma"
        fieldType="text"
        isSubmitted={props.isSubmitted}
      />
      <FormField fieldType="date" isSubmitted={props.isSubmitted} />
      <FormField fieldType="date" isSubmitted={props.isSubmitted} />
    </div>
  );
};

export default Education;
