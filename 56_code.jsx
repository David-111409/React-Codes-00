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
