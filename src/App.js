import React, { Component } from "react";
import Information from "./components/Information";
import Education from "./components/Education";
import Experience from "./components/Experience";
import SubmitButton from "./components/SubmitButton";
import FunctionButton from "./components/FunctionButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSubmitted: false,
      educationFields: 1,
      experienceFields: 1,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.addEducationField = this.addEducationField.bind(this);
    this.addExperienceField = this.addExperienceField.bind(this);
    this.removeEducationField = this.removeEducationField.bind(this);
    this.removeExperienceField = this.removeExperienceField.bind(this);
  }

  handleSubmit() {
    const { isSubmitted } = this.state;
    this.setState({
      isSubmitted: !isSubmitted,
    });
  }

  addEducationField() {
    this.setState({
      educationFields: this.state.educationFields + 1,
    });
  }

  addExperienceField() {
    this.setState({
      experienceFields: this.state.experienceFields + 1,
    });
  }

  removeEducationField() {
    if (this.state.educationFields > 0) {
      this.setState({
        educationFields: this.state.educationFields - 1,
      });
    }
  }

  removeExperienceField() {
    if (this.state.experienceFields > 0) {
      this.setState({
        experienceFields: this.state.experienceFields - 1,
      });
    }
  }

  render() {
    const schools = [];
    const work = [];
    for (let i = 0; i < this.state.educationFields; i++) {
      schools.push(<Education key={i} isSubmitted={this.state.isSubmitted} />);
    }
    for (let i = 0; i < this.state.experienceFields; i++) {
      work.push(<Experience key={i} isSubmitted={this.state.isSubmitted} />);
    }
    return (
      <div className="app">
        <h1>CV Generator</h1>
        <h2>Personal Information</h2>
        <Information isSubmitted={this.state.isSubmitted} />
        <h2>Education</h2>
        {schools}
        <div className="button-container">
          <FunctionButton
            text="Add School"
            color="blue"
            handleClick={this.addEducationField}
            isSubmitted={this.state.isSubmitted}
          />
          <FunctionButton
            text="Remove School"
            color="gray"
            handleClick={this.removeEducationField}
            isSubmitted={this.state.isSubmitted}
          />
        </div>
        <h2>Experience</h2>
        {work}
        <div className="button-container">
          <FunctionButton
            text="Add Work"
            color="blue"
            handleClick={this.addExperienceField}
            isSubmitted={this.state.isSubmitted}
          />
          <FunctionButton
            text="Remove Work"
            color="gray"
            handleClick={this.removeExperienceField}
            isSubmitted={this.state.isSubmitted}
          />
        </div>
        <SubmitButton
          isSubmitted={this.state.isSubmitted}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
