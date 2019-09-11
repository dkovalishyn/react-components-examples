import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Link = ({ to, children }) => (
  <a className="app-link" href={to} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node
};

Link.defaultProps = {
  to: "/",
  children: "Link"
};

export default Link;
