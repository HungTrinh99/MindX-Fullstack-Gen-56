import React from "react";
import { useColor } from "../hooks";
const Square = () => {
  const color = useColor("#000000", 2000);
  return (
    <div
      style={{
        background: color,
        width: "200px",
        height: "200px",
      }}
    >
      <span
        style={{
          fontSize: "24px",
        }}
      >
        {color}
      </span>
    </div>
  );
};

export default Square;
