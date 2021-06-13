import { useContext } from "react";
import { QuizContext } from "../Helper/Context";

const Result = (params) => {
  const { windowState, setWindowState } = useContext(QuizContext);
  const { scores, setscore } = useContext(QuizContext);

  return <div className="name">Your Score : {scores}</div>;
};

export default Result;
