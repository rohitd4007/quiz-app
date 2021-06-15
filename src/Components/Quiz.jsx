import { useState, useContext } from "react";
import { QuizContext } from "../Helper/Context";
import data from "../Helper/question.json";
import Timer from "./Timer";
import "./Quiz.css";

const Quiz = (optams) => {
  const { windowState, setWindowState } = useContext(QuizContext);
  const { scores, setScore } = useContext(QuizContext);

  const [queIndex, setQueIndex] = useState(0);
  const [option, setOption] = useState("");
  const [selected, setSelected] = useState();

  const NextQuestion = () => {
    if (data[queIndex].answer === option) {
      setScore(scores + 1);
    }
    setQueIndex(queIndex + 1);
    setSelected(undefined);
  };
  const checkScore = () => {
    if (data[queIndex].answer === option) {
      setScore(scores + 1);
    }
    setWindowState("result");
  };

  const handleOptionClick = (e, i) => {
    setOption(e.target.value);

    setSelected(i);
  };

  const handleselect = (i) => {
    // if (i === 0) return "select";
    if (selected === i) {
      return "select";
    }
  };

  return (
    <div className="container">
      <div className="timer">
        <Timer initialMinute={0} initialSeconds={60} />
      </div>

      <div className="que-container">
        <div className="question">{data[queIndex].question}</div>
      </div>
      <div className="options-container">
        {data[queIndex].options.map((opt, i) => (
          <button
            key={i}
            value={opt}
            onClick={(e) => handleOptionClick(e, i)}
            className={`single ${handleselect(i)}`}
          >
            {console.log(selected && handleselect(i))}
            {opt}
          </button>
        ))}
      </div>

      <div className="button-container">
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
    </div>
  );
};

export default Quiz;
