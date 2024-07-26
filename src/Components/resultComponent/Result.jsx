/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { QuizContext } from "../../Helper/Context"
import "./Result.css"

const Result = (params) => {
  const { windowState, setWindowState } = useContext(QuizContext);  // eslint-disable-line no-unused-vars
  const { scores, setscore } = useContext(QuizContext);  // eslint-disable-line no-unused-vars

  return (
    <div className="result">
      <div className="score"> Your Score : {scores} </div>
      <button
        onClick={() => {
          setWindowState("menu");
        }}
        className="reset-btn"
      >
        Start Quiz Again
      </button>
    </div>
  );
};

export default Result;