import React from "react";
import { useReducer } from "react";

const initial = { firstCount: 0, secondCount: 2 };

function reducer(state, action) {
  console.log(state);

  switch (action.type) {
    case "increment":
      return { ...state, firstCount: state.firstCount + action.value };
    case "decrement":
      return { ...state, firstCount: state.firstCount - action.value };
    case "reset":
      return initial;

    case "increment5":
      return { ...state, firstCount: state.firstCount + 5 };

    case "decrement5":
      return { ...state, firstCount: state.firstCount - 5 };

    // count 2 reducer

    case "two-increment":
      return { ...state, secondCount: state.secondCount + action.value };
    case "two-decrement":
      return {...state, secondCount: state.secondCount - action.value };

    case "two-increment5":
      return { ...state, secondCount: state.secondCount + 5 };

    case "two-decrement5":
      return { ...state, secondCount: state.secondCount - 5 };

    default:
      return state;
  }
}
function Counters() {
  const [count, dispatch] = useReducer(reducer, initial);

  return (
    <>
      <h1>count : {count.firstCount}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        increase
      </button>
      <button onClick={() => dispatch({ type: "increment5", value: 5 })}>
        increase5
      </button>
      <button onClick={() => dispatch({ type: "decrement5", value: 5 })}>
        decrease5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrease
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      {/* counter 2 */}
      <h1>count : {count.secondCount}</h1>
      <button onClick={() => dispatch({ type: "two-increment", value: 1 })}>
        increase
      </button>
      <button onClick={() => dispatch({ type: "two-increment5", value: 5 })}>
        increase5
      </button>
      <button onClick={() => dispatch({ type: "two-decrement5", value: 5 })}>
        decrease5
      </button>
      <button onClick={() => dispatch({ type: "two-decrement", value: 1 })}>
        decrease
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
}
export default Counters;
