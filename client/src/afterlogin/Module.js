import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Foot from "../footer/Foot";
import axios from "axios";
import Afternavabr from "./Afternavabr";

const Module = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const classValue = query.get("data");
  const navigate = useNavigate();

  const moduleHandle = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.get(
        `http://localhost:7000/api/getquestion/${classValue}`,
        config
      );
      // navigate(`/giveexam?ques=${JSON.stringify(data)}`);
      navigate("/giveexam", { state: { ques: data.data } });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Afternavabr />
      <h1>Welcome class {classValue} student !</h1>
      <div className="module-container">
        <div
          className="module-box container-first"
          onClick={() => navigate(`/gotomodule?class=${classValue}`)}
        >
          Module
        </div>
        <div
          className="module-box container-second"
          onClick={() => navigate("/onlineclass")}
        >
          Go to online class
        </div>
        <div className="module-box container-third" onClick={moduleHandle}>
          Go to Exam
        </div>
      </div>
    </>
  );
};

export default Module;
