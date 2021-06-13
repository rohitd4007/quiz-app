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
        <h1>Quiz App</h1>
        <QuizContext.Provider
          value={{ windowState, setWindowState, scores, setScore }}
        >
          <div className="quiz-container">
            <div className="menu">
              {windowState === "menu" && <StartQuiz />}
            </div>
            <div className="quizz">
              {windowState === "quiz" && <Quiz /> && (
                <div className="timer">
                  <Timer initialMinute={0} initialSeconds={20} />
                </div>
              )}
            </div>
            <div className="res">{windowState === "result" && <Result />}</div>
          </div>
        </QuizContext.Provider>
      </header>
    </div>
  );
}

export default App;
