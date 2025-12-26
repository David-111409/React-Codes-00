import React from "react";
export default function App() {
    const [firstnumber, setFirstNumber] = React.useState("");
    const [secondnumber, setSecondNumber] = React.useState("");
    const [res, setRes] = React.useState("");

    return (
        <>
            <label htmlFor="first">First Number</label>
            <input
                type="number"
                id="first"
                value={firstnumber}
                onChange={(e) => setFirstNumber(e.target.value)}
            />
            <br />
            <label htmlFor="second">Second Number</label>
            <input
                type="number"
                id="second"
                value={secondnumber}
                onChange={(e) => setSecondNumber(e.target.value)}
            />
            <br />
            <button onClick={() => setRes(+firstnumber + +secondnumber)}>
                sum
            </button>
            <br />
            <button onClick={() => setRes(firstnumber - secondnumber)}>
                subtract
            </button>
            <br />
            <button onClickCapture={() => setRes(firstnumber * secondnumber)}>
                multiply
            </button>
            <br />
            <button onClick={() => setRes(firstnumber / secondnumber)}>
                divide
            </button>
            <h1>result : {res || "0"}</h1>
        </>
    );
}

/*
import { clear } from "@testing-library/user-event/dist/clear";
import { useEffect } from "react";
import { useReducer, useState, useRef } from "react";
const initialState = {
  first: 0,
  sec: 10,
};
function reducer(state, action) {
  const { type, value } = action;
  switch (type) {
    case "INCREMENT1":
      return { ...state, first: state.first + value };
    case "RESET1":
      return { ...state, first: 0 };
    case "INCREMENT2":
      return { ...state, sec: state.sec + value };
    case "RESET2":
      return { ...state, sec: 10 };
    default:
      return state;
  }
}
function App() {
  const [counter, dispatch] = useReducer(reducer, initialState);
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(0);
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);
  return (
    <div>
      <h1>first: {counter.first}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT1", value: 1 })}>
        Increment first by 1
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT1", value: 5 })}>
        Increment first by 5
      </button>

      <button onClick={() => dispatch({ type: "RESET1" })}>Reset first</button>

      <h1>second : {counter.sec}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT2", value: 1 })}>
        Increment sec by 1
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT2", value: 5 })}>
        Increment sec by 5
      </button>
      <button onClick={() => dispatch({ type: "RESET2" })}>Reset second</button>

      <h1>Timer: {timer}</h1>
      <button onClick={() => clearInterval(timerRef.current)}>pause the timer</button>
    </div>
  );
}

export default App;
*/
