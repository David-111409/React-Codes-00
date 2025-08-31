import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("dawoud");
  useEffect(() => {
    console.log("hello from use effect");
  }, [name]);
  return (
    <div>
      <h1>Counter :{count} </h1>
      <h2>name : {name}</h2>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setName(name + "k")}>
        update name
      </button>
    </div>
  );
};

export default Counter;
