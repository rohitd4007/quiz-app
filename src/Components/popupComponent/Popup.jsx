import React from 'react';
import './Popup.css';
import StartQuiz from '../StartQuiz';

const Popup = ({ isVisible, onClose, onStartTest }) => {
    if (!isVisible) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose} className="close-button">&times;</button>
                <StartQuiz />
                <button onClick={onClose} className="close-button-mobile">close</button>
            </div>
        </div>
    );
};

export default Popup;
