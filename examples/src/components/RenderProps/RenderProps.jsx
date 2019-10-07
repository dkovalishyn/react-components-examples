import React from "react";
import Field from "./Field";
import Hint from "./Hint";

const RenderProps = () => (
  <form>
    <Field
      render={({ value, hasErrors, onChange }) => (
        <>
          <input value={value} onChange={onChange} />
          {hasErrors && <Hint>Denis is forbidden name!</Hint>}
        </>
      )}
    />
  </form>
);

export default RenderProps;
