import React from "react";

function Cell({ handleClick, item }) {
    return (
        <div className={"cell" + " " + item} onClick={handleClick}>
            {item}
        </div>
    );
}

export default Cell;
