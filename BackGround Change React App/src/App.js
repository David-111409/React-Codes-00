import { useState } from "react";

function getRandomHexColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${hex.padStart(6, "0")}`;
}
const getRandomRgbColor = () =>
  `rgb(${[0, 0, 0].map(() => Math.floor(Math.random() * 256)).join(", ")})`;

function App() {
  // const [hex, setHex] = useState(getRandomHexColor());
  // const [rgb, setRgb] = useState(getRandomRgbColor());
  const [color, setColor] = useState({
    hex: getRandomHexColor(),
    rgb: getRandomRgbColor(),
  });
  const [type, setType] = useState("hex");
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: type === "hex" ? color.hex : color.rgb,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "white" }}>
        {type === "hex" ? "HEX Color" : "RGB Color"}
      </h1>
      <h1
        style={{ color: "white", cursor: "pointer" }}
        onClick={() =>
          navigator.clipboard.writeText(type === "hex" ? color.hex : color.rgb)
        }
      >
        {type === "hex" ? color.hex : color.rgb} (click to copy)
      </h1>
      <div>
        <button onClick={() => setType("hex")}>Create HEX Color</button>
        <button onClick={() => setType("rgb")}>Create RGB Color</button>
        <button
          onClick={() =>
            type === "hex"
              ? setColor({ hex: getRandomHexColor(), rgb: color.rgb })
              : setColor({ hex: color.hex, rgb: getRandomRgbColor() })
          }
        >
          Generate Random Color
        </button>
      </div>
    </div>
  );
}

export default App;
