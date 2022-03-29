import React, { useState, useEffect } from "react";
import { formatDate } from "../utils/date";

export const useClock = (timezon) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      // logic timezon
      const currentTime = new Date();
      const timeAsString = formatDate(currentTime);
      setTime(timeAsString);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return time;
};
