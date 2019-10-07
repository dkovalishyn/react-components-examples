import React, { Component } from "react";

export default WrappedComponent => {
  return class extends Component {
    state = { time: new Date() };

    componentDidMount() {
      this.interval = setInterval(this.updateTime, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    updateTime = () => {
      this.setState({ time: new Date() });
    };

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
};
