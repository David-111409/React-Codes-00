import React, { useReducer } from "react";
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

function Count() {
  const [count1, dis1] = useReducer(reducer, init);
  const [count2, dis2] = useReducer(reducer, init);
  return (
    <div>
      <h1>Count From 0 to 100 ::: {count1}</h1>
      {/* count one */}
      <button onClick={() => dis1("increase")}>increase</button>
      <button onClick={() => dis1("decrease")}>decrease</button>
      <button onClick={() => dis1("reset")}>reset</button>
      <button onClick={() => dis1("half")}>reset to 50</button>
      <button onClick={() => dis1("100")}>reset to 100</button>
      {/* count two */}
      <div>
        <h1>Count From 0 to 100 ::: {count2}</h1>
        <button onClick={() => dis2("increase")}>increase</button>
        <button onClick={() => dis2("decrease")}>decrease</button>
        <button onClick={() => dis2("reset")}>reset</button>
        <button onClick={() => dis2("half")}>reset to 50</button>
        <button onClick={() => dis2("100")}>reset to 100</button>
      </div>
    </div>
  );
}

export default Count;
