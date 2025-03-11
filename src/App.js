/* eslint-disable no-unused-vars */

import "./App.css";
import Quiz from "./Components/quizComponent/Quiz";
import { useState, useEffect } from "react";
import Result from "./Components/resultComponent/Result";
import { QuizContext } from "./Helper/Context";
import Timer from "./Components/timerCoomponent/Timer";
import SelectSkill from "./Components/selectSkillComponent/SelectSkill";
import Header from "./Components/Header/Header";
import ProgressBar from "./Components/ProgressBar/ProgressBar";

function App() {
  const [windowState, setWindowState] = useState("menu");
  const [scores, setScore] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [difficulty, setDifficulty] = useState("");

  // Handle dark mode
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <QuizContext.Provider
        value={{
          windowState,
          setWindowState,
          scores,
          setScore,
          selectedSkill,
          setSelectedSkill,
          currentQuestionIndex,
          setCurrentQuestionIndex,
          totalQuestions,
          setTotalQuestions,
          difficulty,
          setDifficulty
        }}
      >
        <div className="quiz-container">
          {windowState === "menu" && (
            <div className="menu-container">
              <SelectSkill />
            </div>
          )}

          {windowState === "quiz" && (
            <div className="quiz-section">
              <ProgressBar
                current={currentQuestionIndex + 1}
                total={totalQuestions}
              />
              <Timer initialMinute={2} initialSeconds={60} />
              <Quiz />
            </div>
          )}

          {windowState === "result" && (
            <div className="result-container">
              <Result />
            </div>
          )}
        </div>
      </QuizContext.Provider>
    </div>
  );
}

export default App;