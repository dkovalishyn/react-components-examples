import React, { Component } from "react";
import StudentsList from "./StudentsList";

const FORM_KEY = "AddStudentForm";

class AddStudentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formValues: {
        name: "",
        ...JSON.parse(localStorage.getItem(FORM_KEY))
      },
      students: []
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    clearTimeout(this.saveTimer);
    this.saveTimer = setTimeout(this.serializeValues, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.saveTimer);
  }

  serializeValues = () => {
    localStorage.setItem(FORM_KEY, JSON.stringify(this.state));
    console.log("Values saved!");
  };

  setName = ({ target: { value } }) => {
    this.setState(({ formValues }) => ({
      formValues: { ...formValues, name: value }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(({ students, formValues }) => ({
      students: [...students, { ...formValues }],
      formValues: {
        name: ""
      }
    }));
  };

  render() {
    const {
      students,
      formValues: { name }
    } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.setName} value={name} />
          <button>Сохранить</button>
        </form>
        <StudentsList students={students} />
      </>
    );
  }
}

export default AddStudentForm;
