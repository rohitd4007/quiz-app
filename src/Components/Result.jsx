import { useContext } from "react";
import { QuizContext } from "../Helper/Context";
import "../App.css";

const Result = (params) => {
  const { windowState, setWindowState } = useContext(QuizContext);
  const { scores, setscore } = useContext(QuizContext);

  return (
    <div className="name">
      Your Score : {scores}
      <div className="btn-container">
        <button
          onClick={() => {
            setWindowState("menu");
          }}
          className="reset-btn"
        >
          Start Quiz Again
        </button>
      </div>
    </div>
  );
};

export default Result;
