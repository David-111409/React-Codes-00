import React from "react";

function Item({ task, handleDone, handleDelete }) {
    return (
        <li
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px",
            }}
        >
            <label
                style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    fontSize: "1.5em",
                    color: task.done ? "gray" : "black",
                    textDecoration: task.done ? "line-through" : "none",
                    transition: "all 0.2s ease-in-out",
                }}
            >
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => handleDone(task.id)}
                    style={{
                        width: "25px",
                        height: "25px",
                        marginRight: "10px",
                        cursor: "pointer",
                    }}
                />
                {task.text}
            </label>
            <button
                onClick={() => handleDelete(task.id)}
                style={{
                    fontSize: "1.4em",
                    cursor: "pointer",
                    border: "none",
                    background: "none",
                    color: "gray",
                }}
            >
                x
            </button>
        </li>
    );
}

export default Item;
