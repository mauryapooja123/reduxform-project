import { SubmissionError } from "redux-form";

function submit(values) {
  if (!values.username) {
    throw new SubmissionError({
      username: "username is requird",
    });
  } else if (!values.password) {
    throw new SubmissionError({
      password: " password is requird",
    });
  } else {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  }
}

export default submit;
