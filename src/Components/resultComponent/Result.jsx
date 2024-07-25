import { useContext } from "react";
import { QuizContext } from "../../Helper/Context"
import "./Result.css"

const Result = (params) => {
  const { windowState, setWindowState } = useContext(QuizContext);
  const { scores, setscore } = useContext(QuizContext);

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
