import React from "react";
import { useColor } from "../hooks";

const Circle = () => {
  const color = useColor("#000000", 2000);

  return (
    <div
      style={{
        background: color,
        width: "200px",
        height: "200px",
        borderRadius: "100rem",
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

export default Circle;
