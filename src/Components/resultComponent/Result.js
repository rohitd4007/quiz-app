import React, { useContext } from 'react';
import { QuizContext } from '../../Helper/Context';
import './Result.css';

const Result = () => {
    const {
        scores,
        setScore,
        setWindowState,
        selectedSkill,
        difficulty,
        setCurrentQuestionIndex
    } = useContext(QuizContext);

    const handleReset = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setWindowState("menu");
    };

    const handleRetry = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setWindowState("quiz");
    };

    return (
        <div className="result-content">
            <div className="result-card">
                <h1 className="result-title">Quiz Completed!</h1>

                <div className="result-info">
                    <div className="info-item">
                        <span className="info-label">Topic:</span>
                        <span className="info-value">{selectedSkill}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Difficulty:</span>
                        <span className="info-value">{difficulty}</span>
                    </div>
                </div>

                <div className="score-section">
                    <h2 className="score-label">Your Score</h2>
                    <div className="score-value">{scores}</div>
                </div>

                <div className="result-actions">
                    <button
                        className="action-button retry"
                        onClick={handleRetry}
                    >
                        Try Again
                    </button>
                    <button
                        className="action-button new-topic"
                        onClick={handleReset}
                    >
                        Choose New Topic
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Result; 