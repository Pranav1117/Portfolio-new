// MouseMoveEffect.js
import React, { useState } from "react";
import "./MouseMoveEffect.css";

const MouseMoveEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className="mousemove-container" onMouseMove={handleMouseMove}>
      <div
        className="mousemove-circle"
        style={{ left: mousePosition.x - 6, top: mousePosition.y - 52 }}
      >
      </div>
    </div>
  );
};

export default MouseMoveEffect;
