import { useState, useEffect } from "react";

export const useColor = (defaultColor, timeout) => {
  const [color, setColor] = useState(defaultColor);

  // Handle logic
  useEffect(() => {
    const interval = setInterval(() => {
      const newColor = Math.floor(Math.random() * 999999);
      setColor(`#${newColor}`);
    }, timeout);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return color;
};
