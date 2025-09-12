import React from "react";
import { useReducer } from "react";

const initial = 0;

function reducer(state, action) {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initial;
  }
}

function Counters() {
  const [count1, dispatch1] = useReducer(reducer, initial);
  const [count2, dispatch2] = useReducer(reducer, initial);

  return (
    <>
      <h1>Count 1 : {count1}</h1>
      <button onClick={() => dispatch1("increment")}>increment</button>
      <button onClick={() => dispatch1("decrement")}>decrement</button>
      <button onClick={() => dispatch1("reset")}>reset</button>

      <h1>Count 2 : {count2}</h1>
      <button onClick={() => dispatch2("increment")}>increment</button>
      <button onClick={() => dispatch2("decrement")}>decrement</button>
      <button onClick={() => dispatch2("reset")}>reset</button>
    </>
  );
}
export default Counters;
