import React from 'react';
import './Header.css';

const Header = ({ isDarkMode, setIsDarkMode }) => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Quiz Master</h1>
            </div>
            <div className="header-controls">
                <button
                    className="theme-toggle"
                    onClick={() => setIsDarkMode(!isDarkMode)}
                >
                    {isDarkMode ? '☀️' : '🌙'}
                </button>
            </div>
        </header>
    );
};

export default Header; 