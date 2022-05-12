import React from "react";

export const renderComponent = ({ input, label, type, meta }) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input
          {...input}
          placeholder={label}
          type={type}
          style={{
            border:
              meta.error && meta.touched ? "1px solid red" : "1px solid black",
          }}
        />
        {meta.touched &&
          ((meta.error && <span style={{ color: "red" }}>{meta.error}</span>) ||
            (meta.warning && (
              <span style={{ color: "red" }}>{meta.warning}</span>
            )))}
      </div>
    </div>
  );
};
