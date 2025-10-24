import { useState } from "react";

function App() {
  const [newDevice, setNewDevice] = useState("");
  const [items, setItems] = useState([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Keyboard" },
    { id: 4, name: "Monitor" },
    { id: 5, name: "Headphones" },
  ]);
  const [count, setCount] = useState(6);
  const itemsList = items.map((item) => (
    <li
      style={{ padding: "5px", borderBottom: "1px solid white" }}
      key={item.id}
    >
      {item.name}
    </li>
  ));
  return (
    <div style={{ margin: "30px auto", width: "70vw" }}>
      <ul
        style={{
          backgroundColor: "lightblue",
          width: "100%",
          listStyle: "none",
          padding: "0",
        }}
      >
        {itemsList}
      </ul>
      <label htmlFor="name">Name of device: </label>
      <input
        type="text"
        id="name"
        value={newDevice}
        onChange={(e) => setNewDevice(e.target.value)}
      />
      <button
        onClick={() => {
          if (newDevice !== "") {
            setCount(count + 1);
            // console.log(count);
            setItems([{ id: count , name: newDevice }, ...items]);
          }
          setNewDevice("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default App;
