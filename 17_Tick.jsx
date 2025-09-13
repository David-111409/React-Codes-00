import React, {useState, useEffect} from "react";

export default function Tick() {
  const [count, setCount] = useState(0);
  const add = () => setCount(count + 1);
  useEffect(() => {
    let inter = setInterval(add, 1000);
    return () => {
      return clearInterval(inter);
    };
  }, [count]);

  return <div>{count}</div>;
}
