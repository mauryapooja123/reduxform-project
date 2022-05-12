import React from "react";
import Registration from "../Form/Registration";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { SubmissionError } from "redux-form";

const Home = () => {
  const navigate = useNavigate();
  const handleSubmit = async (data) => {
    if (data && data) {
      await axios.post("http://localhost:3002/event", data);
      //console.log(res.data, "dataaaaaaa");
      navigate("/login");
    } else {
      throw new SubmissionError({ _error: "invalid data" });
    }
  };
  return (
    <div>
      <h1>Add</h1>
      <Registration onSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
