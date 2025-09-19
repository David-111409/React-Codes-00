import React, { useReducer } from "react";

function Count() {
  const init = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "increase":
        if (state === 100) return state;
        return state + 1;
      case "decrease":
        if (state === 0) return state;
        return state - 1;
      case "half":
        return 50;
      case "100":
        return 100;
      case "reset":
        return init;
      default:
        return state;
    }
  };
  const [count, dis] = useReducer(reducer, init);
  return (
    <div>
      <h1>Count From 0 to 100 ::: {count}</h1>
      <button onClick={() => dis("increase")}>increase</button>
      <button onClick={() => dis("decrease")}>decrease</button>
      <button onClick={() => dis("reset")}>reset</button>
      <button onClick={() => dis("half")}>reset to 50</button>
      <button onClick={() => dis("100")}>reset to 100</button>
    </div>
  );
}

export default Count;
