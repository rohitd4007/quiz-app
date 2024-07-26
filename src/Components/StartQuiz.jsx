/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { QuizContext } from "../Helper/Context";
import "../App.css";
const StartQuiz = (params) => {
  const { windowState, setWindowState } = useContext(QuizContext);  // eslint-disable-line no-unused-vars
  return (
    <div className="start-button-container">
      <button
        className="button"
        onClick={() => {
          setWindowState("quiz");
        }}
      >
        Start Test
      </button>
    </div>
  );
};

export default StartQuiz;