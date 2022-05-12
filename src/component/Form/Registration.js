import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";

const required = (value) => (value ? undefined : " Field is Required");

const renderField = ({ input, label, type, meta }) => (
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

function Registration(props) {
  const { handleSubmit } = props;

  return (
    <>
      <form
        onSubmit={handleSubmit}
        initialValues={props && props.initialValues}
      >
        <div>
          <label htmlFor="firstName">First Name</label>
          <br />
          <Field
            name="firstName"
            component={renderField}
            type="text"
            validate={[required]}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <br />
          <Field
            name="lastName"
            component={renderField}
            type="text"
            validate={[required]}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <Field
            name="password"
            component={renderField}
            type="password"
            validate={[required]}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <Field
            name="email"
            component={renderField}
            type="email"
            validate={[required]}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default reduxForm({
  form: "simple",
})(Registration);
