import React, { useState, useContext, useEffect } from 'react';
import { QuizContext } from '../../Helper/Context';
import questions from '../../Helper/question.json';
import Loading from '../common/Loading';
import './Quiz.css';

const Quiz = () => {
    const {
        selectedSkill,
        difficulty,
        setWindowState,
        setScore,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        setTotalQuestions
    } = useContext(QuizContext);

    const [currentQuestions, setCurrentQuestions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    useEffect(() => {
        const skillQuestions = questions[selectedSkill][difficulty];
        setCurrentQuestions(skillQuestions);
        setTotalQuestions(skillQuestions.length);
    }, [selectedSkill, difficulty, setTotalQuestions]);

    const handleOptionSelect = (option) => {
        if (isAnswered) return;
        setSelectedOption(option);
        setIsAnswered(true);

        if (option === currentQuestions[currentQuestionIndex].correctAnswer) {
            setScore((prev) => prev + 1);
        }

        setTimeout(() => {
            if (currentQuestionIndex < currentQuestions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedOption(null);
                setIsAnswered(false);
            } else {
                setWindowState("result");
            }
        }, 1000);
    };

    if (!currentQuestions.length) return <Loading />;

    const currentQuestion = currentQuestions[currentQuestionIndex];

    return (
        <div className="quiz-content">
            <div className="question-container">
                <h2 className="question">{currentQuestion.question}</h2>
                <div className="options-container">
                    {currentQuestion.options.map((option, index) => (
                        <button
                            key={index}
                            className={`option-button ${isAnswered
                                ? option === currentQuestion.correctAnswer
                                    ? 'correct'
                                    : option === selectedOption
                                        ? 'incorrect'
                                        : ''
                                : selectedOption === option
                                    ? 'selected'
                                    : ''
                                }`}
                            onClick={() => handleOptionSelect(option)}
                            disabled={isAnswered}
                        >
                            <span className="option-index">
                                {String.fromCharCode(65 + index)}
                            </span>
                            <span className="option-text">{option}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Quiz; 