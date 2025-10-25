import { useState } from "react";

function App() {
  const [newDevice, setNewDevice] = useState("");
  const [items, setItems] = useState([
    { id: 5, name: "Laptop", showInput: false },
    { id: 4, name: "Mouse", showInput: false },
    { id: 3, name: "Keyboard", showInput: false },
    { id: 2, name: "Monitor", showInput: false },
    { id: 1, name: "Headphones", showInput: false },
  ]);
  const [count, setCount] = useState(6);
  const itemsList = items.map((item) => (
    <li
      style={{ padding: "5px", borderBottom: "1px solid white" }}
      key={item.id}
    >
      <p style={{ height: "20px" }}>
        <b>product name:</b> {item.name}
      </p>{" "}
      <button onClick={() => handleDelete(item.id)}>delete</button>
      <button onClick={() => handleEdit(item.id)}>
        {item.showInput ? "save" : "edit"}
      </button>
      {item.showInput && (
        <input
          name="edit"
          style={{ width: "70%" }}
          value={item.name}
          type="text"
          onChange={(e, id) => handleChangeName(e, (id = item.id))}
          placeholder={!item.name ? "Enter a name" : ""}
        />
      )}
    </li>
  ));
  function handleChangeName(e, id) {
    let newName = e.target.value;

    let mappedItems = items.map((item) => {
      if (item.showInput && item.id === id) {
        // item.name = newName;
        return { ...item, name: newName };
      }

      return item;
    });
    setItems(mappedItems);
  }
  function handleEdit(id) {
    let mappedItems = items.map((item) => {
      if (item.id === id && !item.showInput) {
        // item.showInput = true;
        return { ...item, showInput: true };
      } else if (item.id === id && item.showInput && item.name) {
        // item.showInput = false;
        return { ...item, showInput: false };
      }
      return item;
    });
    setItems(mappedItems);
  }
  function handleDelete(id) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }

  return (
    <div
      style={{
        margin: "30px auto",
        width: "70vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
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
        name="name"
        type="text"
        id="name"
        value={newDevice}
        onChange={(e) => setNewDevice(e.target.value)}
      />
      <button
        onClick={() => {
          if (newDevice !== "") {
            setCount((pre) => pre + 1);
            // console.log(count);
            setItems((prev) => [
              ...prev,
              { id: count, name: newDevice, showInput: false },
            ]);
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
