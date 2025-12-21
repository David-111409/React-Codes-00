import React from "react";
import "./index.css";
import Cell from "./components/Cell";
export default function App() {
    const [cells, setCells] = React.useState([
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ]);
    const [turn, setTurn] = React.useState("O");
    const handleClick = (ind) => {
        const newCells = [...cells];
        if (cells[ind] || winning()) return;
        newCells[ind] = turn;
        setCells(newCells);
        setTurn(turn === "X" ? "O" : "X");
    };
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    function winning() {
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                return cells[a] + " wins!";
            }
        }
        if (!cells.includes("")) return "Draw!";
        return null;
    }
    function handleReset() {
        setCells(["", "", "", "", "", "", "", "", ""]);
        setTurn("O");
    }
    return (
        <main className="game">
            {winning() && <h1>{winning()}</h1>}
            {!winning() && <h1>It is now {turn} turn</h1>}

            <div className="board">
                {cells.map((item, ind) => {
                    return (
                        <Cell
                            key={ind}
                            handleClick={() => handleClick(ind)}
                            item={item}
                        />
                    );
                })}
            </div>
            <button onClick={handleReset} className="reset">
                Reset
            </button>
        </main>
    );
}


