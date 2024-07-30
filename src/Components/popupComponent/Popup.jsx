import React from 'react';
import './Popup.css';
import StartQuiz from '../StartQuiz';

const Popup = ({ isVisible, onClose, onStartTest }) => {
    if (!isVisible) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {/* <h2>Start Test</h2>
                <button onClick={onStartTest} className="start-test-button">Start Test</button> */}
                <button onClick={onClose} className="close-button">&times;</button>
                <StartQuiz />

            </div>
        </div>
    );
};

export default Popup;
