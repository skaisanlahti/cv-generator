import React, { useState } from "react";

const FormField = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return props.isSubmitted ? (
    <p>{value}</p>
  ) : (
    <input
      type={props.fieldType}
      name="value"
      placeholder={props.placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default FormField;
