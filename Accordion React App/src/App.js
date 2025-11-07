import { useState, useEffect } from "react";
import data from "./data";
import "./App.css";

export default function Accordian() {
  const [enableMulti, setEnableMulti] = useState(false);
  const [chosenData, setChosenData] = useState(data);
  useEffect(() => {
    if (!enableMulti) {
      const openedItems = chosenData.filter((item) => item.open);

      if (openedItems.length <= 1) return;

      // keep only the LAST open item
      const lastOpenId = openedItems[openedItems.length - 1].id;

      // update chosenData to keep only the last one open
      setChosenData((prev) =>
        prev.map((item) =>
          item.id === lastOpenId
            ? { ...item, open: true }
            : { ...item, open: false }
        )
      );
    }
  }, [enableMulti]);
  function handleMany(id) {
    setChosenData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, open: !item.open } : item
      )
    );
  }
  function handleOne(id) {
    setChosenData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, open: !item.open }
          : { ...item, open: false }
      )
    );
  }
  return (
    <div className="acc-wrapper">
      <button onClick={() => setEnableMulti(!enableMulti)}>
        {enableMulti ? "Disable Multi Selection" : "Enable Multi Selection"}
      </button>

      <div className="acc-container">
        {chosenData.map(({ answer, question, id, open }) => (
          <div className="item" key={id}>
            <div
              className="title"
              onClick={() => (enableMulti ? handleMany(id) : handleOne(id))}
            >
              <h3>{question}</h3>
              <span>{open ? "-" : "+"}</span>
            </div>

            {open && <div className="acc-content">{answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
