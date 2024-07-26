/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useContext } from "react";
import { QuizContext } from "../../Helper/Context";
import "./Timer.css";


const Timer = (params) => {
  const { initialMinute = 0, initialSeconds = 0 } = params;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  const { windowState, setWindowState } = useContext(QuizContext);  // eslint-disable-line no-unused-vars
  const { scores, setScore } = useContext(QuizContext);  // eslint-disable-line no-unused-vars

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          setWindowState("result");
          // setScore(scores + 1);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="timer-1">
      Time Left : {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );

  // const [counter, setCounter] = React.useState(60);
  // const [second, setSecond] = React.useState(60);

  // console.log(secondsToTime(30 * 60));

  // React.useEffect(() => {
  //   const timer =
  //     counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
  //   return () => clearInterval(timer);
  // }, [counter]);

  // return (
  //   <div className="Timer-Header">
  //     <div>Countdown: {counter}</div>
  //     <div className="btn">
  //       <button onClick={clearInterval(counter)}>stop</button>
  //     </div>
  //   </div>
  // );
};

export default Timer;