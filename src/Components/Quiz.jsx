import { useState, useContext } from "react";
import { QuizContext } from "../Helper/Context";
import data from "../Helper/question.json";
import Timer from "./Timer";

const Quiz = (params) => {
  const { windowState, setWindowState } = useContext(QuizContext);
  const { scores, setScore } = useContext(QuizContext);

  const [queIndex, setQueIndex] = useState(0);
  const [option, setOption] = useState("");

  const NextQuestion = () => {
    if (data[queIndex].answer === option) {
      setScore(scores + 1);
    }

    setQueIndex(queIndex + 1);
  };
  const checkScore = () => {
    if (data[queIndex].answer === option) {
      setScore(scores + 1);
    }
    setWindowState("result");
  };

  return (
    <div className="container">
      <div className="timer">
        <Timer initialMinute={0} initialSeconds={20} />
      </div>
      <div className="question">{data[queIndex].question}</div>

      {data[queIndex].options.map((par, i) => (
        <button key={i} value={par} onClick={(e) => setOption(e.target.value)}>
          {par}
        </button>
      ))}

      {queIndex === data.length - 1 ? (
        <div className="submit-btn">
          <button className="submit" onClick={checkScore}>
            Submit
          </button>
        </div>
      ) : (
        <div className="next-btn">
          <button className="btn" onClick={NextQuestion}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
