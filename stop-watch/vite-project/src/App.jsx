import { use, useEffect, useState } from "react";
import "./index.css";

function App() {
    const [running, setRunning] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);
    let first = Math.floor(time / 60000) % 60;
    let second = Math.floor(time / 1000) % 60;
    let third = Math.floor(time / 10) % 100;
    return (
        <div className="container">
            <div className="timer">
                <span>{first < 10 ? "0" + first : first} : </span>
                <span>{second < 10 ? "0" + second : second} : </span>
                <span>{third < 10 ? "0" + third : third}</span>
            </div>
            <div className="buttons">
                <button className="btn" onClick={() => setRunning(!running)}>
                    {running ? "Stop" : "Start"}
                </button>
                <button className="btn reset" onClick={() => setTime(0)}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default App;
