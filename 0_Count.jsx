import { useState } from "react";

export default function Counter() {
  const [list, setNames] = useState(["Hager", "Khaled"]);
  const [input, setInput] = useState("");
  function addFun() {
    setNames([...list, input]);
    setInput("");
  }

  function removeFun(id) {
    setNames(list.filter((_, index) => index !== id));
  }
  function editFun(id){
    setNames(list.map((el, index) => index === id ? "Hey " + el : el))
  }
  return (
    <>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ height: "30px", padding: "0 10px", outline: "none" }}
        placeholder="Add the name to the list"
      />
      <ul>
        <h1>
          {list.map((name, ind) => (
            <li key={ind}>
              {name} <button onClick={() => removeFun(ind)}>delete</button> <button onClick={() => editFun(ind)}>Edit</button>
            </li>
          ))}
        </h1>
      </ul>
      <button onClick={() => addFun()}>Add</button>
    </>
  );
}
