import React, { useState, useEffect, useContext } from 'react';
import { QuizContext } from '../../Helper/Context';
import './Timer.css';

const Timer = ({ initialMinute = 2, initialSeconds = 0 }) => {
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);
    const { setWindowState } = useContext(QuizContext);

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval);
                    setWindowState("result");
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => clearInterval(myInterval);
    }, [minutes, seconds, setWindowState]);

    const getTimerColor = () => {
        if (minutes === 0 && seconds <= 30) return 'timer-warning';
        if (minutes === 0 && seconds <= 10) return 'timer-danger';
        return '';
    };

    return (
        <div className={`timer ${getTimerColor()}`}>
            <div className="timer-display">
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </div>
            <div className="timer-progress">
                <div
                    className="timer-bar"
                    style={{
                        width: `${((minutes * 60 + seconds) / (initialMinute * 60 + initialSeconds)) * 100}%`
                    }}
                />
            </div>
        </div>
    );
};

export default Timer; 