import { useContext } from "react";
import { QuizContext } from "../Helper/Context";
import "../App.css";
const StartQuiz = (params) => {
  const { windowState, setWindowState } = useContext(QuizContext);
  return (
    <div className="container">
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
