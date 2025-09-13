import React from "react";
import { useState, useEffect } from "react";

export default function XY() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const loadPosition = (e) => {
    console.log("new position");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect here.");
    window.addEventListener("mousemove", loadPosition);
  }, []);
  return (
    <div>
      <h1>
        X : {x} || Y : {y}
      </h1>
    </div>
  );
}
