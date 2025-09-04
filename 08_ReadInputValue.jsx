import { useState } from "react";

const ReadValueOfInput = () => {
  const [text, setText] = useState("");
  return (
    <div>
      {" "}
      <input
        type="text"
        placeholder="write what you want..."
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
    </div>
  );
};

export default ReadValueOfInput;
