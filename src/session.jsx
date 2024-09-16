import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Session({
  sessionLength,
  setSessionLength,
  isRunning,
  setRemainingTime,
}) {
  function decrementSession() {
    if (sessionLength > 1 && isRunning == false) {
      setSessionLength(sessionLength - 1);
      setRemainingTime(sessionLength * 60 - 60);
    }
  }
  function incrementSession() {
    if (sessionLength < 60 && isRunning == false) {
      setSessionLength(sessionLength + 1);
      setRemainingTime(sessionLength * 60 + 60);
    }
  }
  return (
    <div className="col-6 fs-4 d-flex flex-column flex-wrap">
      <div id="session-label">Session Length</div>
      <div className="d-flex flex-row flex-nowrap justify-content-center">
        <div
          id="session-decrement"
          onClick={decrementSession}
          className="btn fs-4"
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
        <div id="session-length" className="fs-4 pt-1">
          {sessionLength}
        </div>
        <div
          id="session-increment"
          onClick={incrementSession}
          className="btn fs-4"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      </div>
    </div>
  );
}

export default Session;
