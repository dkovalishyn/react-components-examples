import React from "react";
import withTime from "./withTime";

export const TimeViewer = ({ time }) => <div>{time.toLocaleString()}</div>;

export default withTime(TimeViewer);
