import React from "react";
function App() {
    const [count, setCount] = React.useState(0);
    function handleIncrement() {
        setCount((prev) => prev + 1);
        setTimeout(() => {
            setCount((pre) => pre + 1);
        }, 500);
    }
    function handleDecrement() {
        setCount((prev) => prev - 1);
        setTimeout(() => {
            setCount((pre) => pre - 1);
        }, 500);
    }
    return (
        <>
            <h1>The count is: {count}</h1>
            <button onClick={handleIncrement}>+2</button>
            <button onClick={handleDecrement}>-2</button>
        </>
    );
}

export default App;
/*
import { useState } from "react";

export default function RequestTracker() {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    async function handleClick() {
        setPending((prev) => prev + 1);
        await delay(3000);
        setPending((prev) => prev - 1);
        setCompleted((prev) => prev + 1);
    }

    return (
        <>
            <h3>Pending: {pending}</h3>
            <h3>Completed: {completed}</h3>
            <button onClick={handleClick}>Buy</button>
        </>
    );
}

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
*/
