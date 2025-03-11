import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ current, total }) => {
    const progress = (current / total) * 100;

    return (
        <div className="progress-container">
            <div className="progress-info">
                Question {current} of {total}
            </div>
            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
};

export default ProgressBar; 