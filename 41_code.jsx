import { useState } from "react";

export default function App() {
  const [divColor, setDivColor] = useState("blue");
  const genButtonStyle = {
    padding: "10px 20px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
  };
  return (
    <>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: divColor,
          marginBottom: "15px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          transition: "background-color 0.3s ease",
        }}
      ></div>
      <div style={{ display: "flex", gap: "15px" }}>
        <button onClick={() => setDivColor("red")} style={genButtonStyle}>
          Red
        </button>
        <button
          onClick={() => setDivColor("blue")}
          style={{ ...genButtonStyle, backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          onClick={() => setDivColor("green")}
          style={{ ...genButtonStyle, backgroundColor: "green" }}
        >
          Green
        </button>
        <button
          onClick={() => setDivColor("yellow")}
          style={{
            ...genButtonStyle,
            backgroundColor: "yellow",
            color: "black",
          }}
        >
          Yellow
        </button>
        <button
          onClick={() => setDivColor("black")}
          style={{ ...genButtonStyle, backgroundColor: "black" }}
        >
          Black
        </button>
      </div>
    </>
  );
}
