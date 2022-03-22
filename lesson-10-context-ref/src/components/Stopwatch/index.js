import React, { useState, useRef } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const timer = useRef();
  const inputRef = useRef();

  const onStart = () => {
    console.log("start");
    timer.current = setInterval(() => {
      setTime((prevTime) => {
        return prevTime + 1;
      });
    }, 1000);
  };

  const onStop = () => {
    console.log("Stop...");
    console.log("Interval- ", timer);
    clearInterval(timer.current);
  };

  const sec = time % 60;
  const min = Math.floor(time / 60);

  //console.log("UI re-rendered");
  const inputFocusHandler = () => {
    console.log(inputRef.current);

    inputRef.current.focus();
  };

  return (
    <div className="stopwatch-container">
      <p>
        {min}:{sec}
      </p>
      <button
        style={{
          marginRight: "16px",
        }}
        className="start-btn"
        onClick={onStart}
      >
        Start
      </button>
      <button className="start-btn" onClick={onStop}>
        Stop
      </button>
      <input ref={inputRef} />
      <button onClick={inputFocusHandler}>Focus input</button>
    </div>
    // <div className="row">
    //   <div className="col-6"></div>
    //   <div className="col-6"></div>
    // </div>
  );
};

export default StopWatch;

/**
 *
 * 1. Ref => {current: ...}
 * 2. ref change => no re-renderd
 * 3. ref === document.getElementById('...')
 */
