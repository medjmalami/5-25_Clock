import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
/**
 * A React component that displays and controls the length of a break.
 *
 * @param {number} breakLength - the current length of the break
 * @param {function} setBreakLength - a function to update the break length
 * @return {JSX.Element} a JSX element representing the break length component
 */
function Break({ breakLength, setBreakLength, isRunning }) {
  function decrementBreak() {
    if (breakLength > 1 && isRunning == false) {
      setBreakLength(breakLength - 1);
    }
  }
  function incrementBreak() {
    if (breakLength < 60 && isRunning == false) {
      setBreakLength(breakLength + 1);
    }
  }

  return (
    <div className="col-6 fs-4 d-flex flex-column flex-wrap">
      <div id="break-label">Break Length</div>
      <div className="d-flex flex-row flex-nowrap justify-content-center">
        <div id="break-decrement" onClick={decrementBreak} className="btn fs-4">
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
        <div id="break-length" className="fs-4 pt-1">
          {breakLength}
        </div>
        <div id="break-increment" onClick={incrementBreak} className="btn fs-4">
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      </div>
    </div>
  );
}

export default Break;
