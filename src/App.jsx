import { useState } from "react";
import Break from "./break";
import Session from "./session";
import Timer from "./timer";
function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerType, setTimerType] = useState("Session");
  const [remainingTime, setRemainingTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="text-center container border border-black rounded bg-dark-subtle">
      <div className="row">
        <div className="col-12 fs-1">25 + 5 Clock</div>
      </div>
      <div className="row">
        <Break
          breakLength={breakLength}
          setBreakLength={setBreakLength}
          isRunning={isRunning}
        />
        <Session
          sessionLength={sessionLength}
          setSessionLength={setSessionLength}
          isRunning={isRunning}
          setRemainingTime={setRemainingTime}
        />
      </div>
      <div className="row d-flex justify-content-center">
        <Timer
          breakLength={breakLength}
          sessionLength={sessionLength}
          timerType={timerType}
          setTimerType={setTimerType}
          remainingTime={remainingTime}
          setRemainingTime={setRemainingTime}
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          setBreakLength={setBreakLength}
          setSessionLength={setSessionLength}
        />
      </div>
    </div>
  );
}

export default App;
