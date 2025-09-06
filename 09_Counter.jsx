import { useReducer } from "react";

const Counter = () => {
  const init = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return init;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, init);
  const incrementFun = () => dispatch("increment");
  const decrementFun = () => dispatch("decrement");
  const resetFun = () => dispatch("reset");


  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={incrementFun}> increase</button>
      <button onClick={decrementFun}> decrease</button>
      <button onClick={resetFun}> reset</button>

      
    </>
  );
};

export default Counter;
