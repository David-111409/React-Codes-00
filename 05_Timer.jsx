import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((prev) => prev + 1);
      // clearInterval(timer);
     // console.log(time);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <h1>{time}</h1>;
}

export default Timer;
