import "./App.css";
import Quiz from "./Components/quizComponent/Quiz";
import { useState } from "react";
import Result from "./Components/resultComponent/Result";
import { QuizContext } from "./Helper/Context";
import StartQuiz from "./Components/StartQuiz";
import Timer from "./Components/timerCoomponent/Timer";

function App() {
  const [windowState, setWindowState] = useState("menu");
  const [scores, setScore] = useState(0);
  return (
    <div className="App">
      <QuizContext.Provider
        value={{ windowState, setWindowState, scores, setScore }}
      >
        <>
          {windowState === "menu" &&
            <StartQuiz />
          }
          {windowState === "quiz" &&
            <>
              <Timer initialMinute={2} initialSeconds={60} />
              <Quiz />
            </>
          }
          {windowState === "result" &&
            <div className="res">
              <Result />
            </div>
          }
        </>
      </QuizContext.Provider>
    </div>
  );
}

export default App;
