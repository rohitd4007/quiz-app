import React, { useState } from 'react';
import './Header.css';

const Header = ({ isDarkMode, setIsDarkMode }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navOptions = (
        <>
            <div className="header-control-item">Play Quiz</div>
            <div className="header-control-item">Categories</div>
            <div className="header-control-item">Profile</div>
            <button
                className={`theme-toggle${isDarkMode ? ' dark' : ''} desktop-only mobile-only`}
                onClick={() => setIsDarkMode(!isDarkMode)}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
                <span className="toggle-track">
                    <span className="toggle-thumb">
                        {isDarkMode ? '🌙' : '☀️'}
                    </span>
                </span>
            </button>
        </>
    );

    return (
        <header className="header">
            <div className="logo">
                {/* <span className="logo-icon" aria-label="Quiz Icon" role="img">🎯</span> */}
                <h1>Quiz<span className="logo-highlight">Master</span></h1>
            </div>
            <div className="header-controls desktop-only">
                {navOptions}
            </div>
            <button
                className="hamburger mobile-only"
                aria-label="Open menu"
                onClick={() => setSidebarOpen(true)}
            >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="5" width="28" height="3.5" rx="1.75" fill="#a16207" />
                    <rect y="12" width="28" height="3.5" rx="1.75" fill="#a16207" />
                    <rect y="19" width="28" height="3.5" rx="1.75" fill="#a16207" />
                </svg>
            </button>
            {/* Sidebar and overlay */}
            {sidebarOpen && (
                <>
                    <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
                    <nav className="sidebar">
                        <button className="sidebar-close" aria-label="Close menu" onClick={() => setSidebarOpen(false)}>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="7" y1="7" x2="21" y2="21" stroke="#a16207" strokeWidth="2.5" strokeLinecap="round" />
                                <line x1="21" y1="7" x2="7" y2="21" stroke="#a16207" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </button>
                        <div className="sidebar-nav">
                            {navOptions}
                        </div>
                    </nav>
                </>
            )}
        </header>
    );
};

export default Header; 