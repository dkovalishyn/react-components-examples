import { Component } from "react";

class Field extends Component {
  state = { value: undefined };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return this.props.render({
      value,
      hasErrors: value === "Denis",
      onChange: this.handleChange
    });
  }
}

export default Field;
