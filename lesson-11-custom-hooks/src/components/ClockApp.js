import React from "react";
import { useClock } from "../hooks";
// const timezon = "GMT+7";
const ClockApp = () => {
  const clock = useClock();
  return (
    <div>
      <span
        style={{
          color: "red",
          fontSize: "32px",
        }}
      >
        {clock}
      </span>
    </div>
  );
};

export default ClockApp;
