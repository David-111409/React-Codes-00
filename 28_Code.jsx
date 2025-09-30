import { useState } from "react";
const App = () => {
  const [vision, setVision] = useState(true);
  const objStyle = {
    backgroundColor: "rebeccapurple",
    padding: "10px",
    borderRadius: "5px",
    width: "50px",
    height: "50px",
    border: "none",
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <button style={objStyle} onClick={() => setVision((vision) => !vision)}>
        {vision ? "hide" : "show"}
      </button>
      {vision && <h1>Welcome to react challenges</h1>}
    </div>
  );
};

export default App;
