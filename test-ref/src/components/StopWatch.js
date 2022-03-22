import React, { useState, useRef } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(121);
  let interval;

  const sec = time % 60;
  const min = Math.floor(time / 60);

  const onStartHandler = () => {
    interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };
  const onStopHandler = () => {};
  return (
    <div>
      <p>
        {min}: {sec}
      </p>
      <button onClick={onStartHandler}>Start</button>
      <button onClick={onStopHandler}>Stop</button>
    </div>
  );
};

export default StopWatch;
