import React, { Component } from "react";
import PropTypes from "prop-types";

const FORM_KEY = "AddStudentForm";

class AddStudentForm extends Component {
  constructor(props) {
    super(props);

    this.state = AddStudentForm.deserializeValues();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.saveTimer = setTimeout(this.serializeValues, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.saveTimer);
  }

  static deserializeValues = () => {
    const storedValues = JSON.parse(localStorage.getItem(FORM_KEY));

    return (
      storedValues || {
        name: 0
      }
    );
  };

  serializeValues = () => {
    localStorage.setItem(FORM_KEY, JSON.stringify(this.state));
    alert('Values saved!');
  };

  setName = ({ target: { value } }) => {
    this.setState({ name: value });
  };

  handleSubmit = () => alert(this.state.name);

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.setName} value={this.state.name} />
        <button>Сохранить</button>
      </form>
    );
  }
}

AddStudentForm.propTypes = {};

AddStudentForm.defaultProps = {};

export default AddStudentForm;
