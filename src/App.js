import React, { useState } from "react";
import Information from "./components/Information";
import Education from "./components/Education";
import Experience from "./components/Experience";
import SubmitButton from "./components/SubmitButton";
import FunctionButton from "./components/FunctionButton";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [educationFields, setEducationFields] = useState(1);
  const [experienceFields, setExperienceFields] = useState(1);

  const handleSubmit = () => {
    setIsSubmitted(!isSubmitted);
  };

  const addEducationField = () => {
    setEducationFields(educationFields + 1);
  };

  const addExperienceField = () => {
    setExperienceFields(experienceFields + 1);
  };

  const removeEducationField = () => {
    if (educationFields > 0) {
      setEducationFields(educationFields - 1);
    }
  };

  const removeExperienceField = () => {
    if (experienceFields > 0) {
      setExperienceFields(experienceFields - 1);
    }
  };

  const schools = () => {
    const elements = [];
    for (let i = 0; i < educationFields; i++) {
      elements.push(<Education key={i} isSubmitted={isSubmitted} />);
    }
    return elements;
  };

  const work = () => {
    const elements = [];
    for (let i = 0; i < experienceFields; i++) {
      elements.push(<Experience key={i} isSubmitted={isSubmitted} />);
    }
    return elements;
  };

  return (
    <div className="app">
      <h1>CV Generator</h1>
      <h2>Personal Information</h2>
      <Information isSubmitted={isSubmitted} />
      <h2>Education</h2>
      {schools()}
      <div className="button-container">
        <FunctionButton
          text="Add School"
          color="blue"
          handleClick={addEducationField}
          isSubmitted={isSubmitted}
        />
        <FunctionButton
          text="Remove School"
          color="gray"
          handleClick={removeEducationField}
          isSubmitted={isSubmitted}
        />
      </div>
      <h2>Experience</h2>
      {work()}
      <div className="button-container">
        <FunctionButton
          text="Add Work"
          color="blue"
          handleClick={addExperienceField}
          isSubmitted={isSubmitted}
        />
        <FunctionButton
          text="Remove Work"
          color="gray"
          handleClick={removeExperienceField}
          isSubmitted={isSubmitted}
        />
      </div>
      <SubmitButton isSubmitted={isSubmitted} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
