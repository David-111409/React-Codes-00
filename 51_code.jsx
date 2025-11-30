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
