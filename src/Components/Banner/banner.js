import React from 'react';
import './banner.css';

const Banner = ({ onPlayQuiz }) => {
    return (
        <div className="banner-container">
            <div className="home-left">
                <h1 className="home-title">Think You’re Smart? <br />Prove It.</h1>
                <p className="home-subtitle">
                    Unleash your inner genius with<br />
                    fun and fast quizzes.
                </p>
                <button className="home-play-btn" onClick={onPlayQuiz}>
                    <span className="btn-icon" role="img" aria-label="quiz">📝</span>
                    Start Quiz
                </button>
            </div>
            <div className="home-right">
                <span className="home-illustration" aria-label="trophy and confetti" role="img">
                    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="90" cy="160" rx="50" ry="10" fill="#E5E7EB" />
                        <rect x="75" y="120" width="30" height="30" rx="8" fill="#F59E42" />
                        <rect x="82" y="145" width="16" height="8" rx="4" fill="#FBBF24" />
                        <path d="M60 60 Q90 30 120 60" stroke="#F59E42" strokeWidth="10" fill="none" />
                        <ellipse cx="90" cy="80" rx="40" ry="35" fill="#FBBF24" />
                        <ellipse cx="90" cy="80" rx="30" ry="25" fill="#FDE68A" />
                        <circle cx="60" cy="60" r="10" fill="#F59E42" />
                        <circle cx="120" cy="60" r="10" fill="#F59E42" />
                        <path d="M50 60 Q40 90 75 100" stroke="#F59E42" strokeWidth="6" fill="none" />
                        <path d="M130 60 Q140 90 105 100" stroke="#F59E42" strokeWidth="6" fill="none" />
                        <circle cx="40" cy="40" r="3" fill="#3B82F6" />
                        <circle cx="140" cy="40" r="3" fill="#F43F5E" />
                        <circle cx="50" cy="120" r="2.5" fill="#22C55E" />
                        <circle cx="130" cy="120" r="2.5" fill="#A16207" />
                        <rect x="70" y="30" width="4" height="8" rx="2" fill="#F43F5E" transform="rotate(-20 70 30)" />
                        <rect x="110" y="30" width="4" height="8" rx="2" fill="#3B82F6" transform="rotate(20 110 30)" />
                    </svg>
                </span>
            </div>
        </div>
    )
}

export default Banner;