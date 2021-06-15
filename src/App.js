import "./App.css";
import Quiz from "./Components/Quiz";
import { useState } from "react";
import Result from "./Components/Result";
import { QuizContext } from "./Helper/Context";
import StartQuiz from "./Components/StartQuiz";
import Timer from "./Components/Timer";

function App() {
  const [windowState, setWindowState] = useState("menu");
  const [scores, setScore] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h2>QUIZ APP</h2>

        <QuizContext.Provider
          value={{ windowState, setWindowState, scores, setScore }}
        >
          <div className="quiz-container">
            <div className="menu">
              {windowState === "menu" && <StartQuiz />}
            </div>
            <div className="quiz-class">
              {windowState === "quiz" && <Quiz />}
            </div>
            <div className="res">{windowState === "result" && <Result />}</div>
          </div>
        </QuizContext.Provider>
      </header>
    </div>
  );
}

export default App;
