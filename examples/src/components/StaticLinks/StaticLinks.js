import React from "react";
import logo from "./logo.svg";
import Link from "../../components/Link";

const StaticLinks = () => (
  <div className="app">
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      <p>
        Edit <code>src/app.js</code> and save to reload.
      </p>
      <nav>
        <Link to="https://reactjs.org">Learn React</Link>
        <Link to="https://reacttraining.com/react-router/web/guides/quick-start">
          Learn React-Router
        </Link>
      </nav>
    </header>
  </div>
);

export default StaticLinks;
