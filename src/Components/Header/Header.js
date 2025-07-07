import React from 'react';
import './Header.css';

const Header = ({ isDarkMode, setIsDarkMode }) => {
    return (
        <header className="header">
            <div className="logo">
                {/* <span className="logo-icon" aria-label="Quiz Icon" role="img">🎯</span> */}
                <h1>Quiz<span className="logo-highlight">Master</span></h1>
            </div>
            <div className="header-controls">
                <div className="header-control-item"> Play Quiz</div>
                <div className="header-control-item"> Categories</div>
                <div className="header-control-item"> Profile</div>
                <button
                    className={`theme-toggle${isDarkMode ? ' dark' : ''}`}
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                    <span className="toggle-track">
                        <span className="toggle-thumb">
                            {isDarkMode ? '🌙' : '☀️'}
                        </span>
                    </span>
                </button>
            </div>
        </header>
    );
};

export default Header; 