/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { QuizContext } from "../../Helper/Context"
import "./Result.css"

const Result = (params) => {
  const { windowState, setWindowState } = useContext(QuizContext);  // eslint-disable-line no-unused-vars
  const { scores, setscore } = useContext(QuizContext);  // eslint-disable-line no-unused-vars
  const { setSelectedSkill } = useContext(QuizContext);

  const handleReset = () => {
    setWindowState("menu");
    setSelectedSkill('')
    setscore(0)
  }

  return (
    <div className="result">
      <div className="score"> Your Score : {scores} </div>
      <button
        onClick={() => handleReset()}
        className="reset-btn"
      >
        Start Quiz Again
      </button>
    </div>
  );
};

export default Result;