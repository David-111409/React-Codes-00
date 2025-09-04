import { useState } from "react";

const ReadValueOfInput = () => {
  const [text, setText] = useState("");
  return (
    <div>
      {" "}
      <input
        type="text"
        placeholder="write what you want..."
        value = {text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
      <button onClick={() => setText("")}>reset</button>
    </div>
  );
};

export default ReadValueOfInput;
