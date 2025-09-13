import React, { use, useState } from "react";
import "./style.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(false);
  //   function handleIncrement() {
  //     setCount(count + 1);
  //   }

  const handleIncrement = () => {
    setCount(count + 1);
    setColor(!color);
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>count / {count}</h1>
      <button className="counter" onClick={handleIncrement}>
        increment
      </button>
      <h1 className={color ? "red" : ""}>Change our color</h1>
    </div>
  );
}

export default Counter;
