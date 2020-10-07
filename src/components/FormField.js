import React, { Component } from "react";

class FormField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    if (this.props.isSubmitted) {
      return <p>Submit status: {this.state.value}</p>;
    } else {
      return (
        <input
          type={this.props.fieldType}
          name="value"
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.handleChange}
        />
      );
    }
  }
}

export default FormField;
