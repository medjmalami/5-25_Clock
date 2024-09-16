import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faRotate } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import React from "react";
function Timer({
  breakLength,
  sessionLength,
  timerType,
  setTimerType,
  remainingTime,
  setRemainingTime,
  isRunning,
  setIsRunning,
  setBreakLength,
  setSessionLength,
}) {
  const beep = React.createRef();
  useEffect(() => {
    let intervalId = null;
    if (isRunning) {
      intervalId = setInterval(() => {
        if (remainingTime > 0) {
          setRemainingTime((prevRemainingTime) => prevRemainingTime - 1);
        } else if (timerType == "Session") {
          setTimerType("Break");
          beep.current.play();
          setRemainingTime(breakLength * 60);
        } else if (timerType == "Break") {
          setTimerType("Session");
          beep.current.play();
          setRemainingTime(sessionLength * 60);
        }
      }, 1000);
    }
    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning, remainingTime, timerType, breakLength, sessionLength]);

  function startTimer() {
    setIsRunning(true);
  }

  function stopTimer() {
    setIsRunning(false);
  }
  function resetTimer() {
    beep.current.pause();
    beep.current.currentTime = 0;
    setIsRunning(false);
    setTimerType("Session");
    setRemainingTime(25 * 60);
    setBreakLength(5);
    setSessionLength(25);
  }

  return (
    <div className="col fs-2 ">
      <div id="timer-label">{timerType}</div>
      <div id="time-left">
        {`${Math.floor(remainingTime / 60)
          .toString()
          .padStart(2, "0")}:${(remainingTime % 60)
          .toString()
          .padStart(2, "0")}`}
      </div>
      <div className="d-flex flex-row flex-nowrap justify-content-center">
        <div id="start_stop" className="d-flex flex-row flex-nowrap">
          <div id="start" onClick={startTimer} className="btn fs-4">
            <FontAwesomeIcon icon={faPlay} />
          </div>
          <div id="stop" onClick={stopTimer} className="btn fs-4">
            <FontAwesomeIcon icon={faPause} />
          </div>
        </div>
        <div id="reset" onClick={resetTimer} className="btn fs-4">
          <FontAwesomeIcon icon={faRotate} />
        </div>
        <audio id="beep" ref={beep} src="../public/BeepSound.wav"></audio>
      </div>
    </div>
  );
}

export default Timer;
