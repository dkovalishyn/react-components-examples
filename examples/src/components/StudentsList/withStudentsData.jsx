import React, { Component } from "react";
import { getResource, URLS } from "../../services/api";

export default WrappedComponent => {
  class WithStudentsData extends Component {
    state = { students: null, error: null };

    async componentDidMount() {
      try {
        const students = await getResource(URLS.students);
        this.setState({ students });
      } catch (e) {
        this.setState({ error: e.message });
      }
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  }

  return WithStudentsData;
};
