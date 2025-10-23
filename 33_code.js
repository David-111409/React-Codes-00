import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    area: "",
    isStudent: false,
    country: "",
    color: "",
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(form);
      }}
    >
      <h1>Form</h1>
      <input
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        type="text"
        placeholder="Name"
      />
      <hr></hr>
      <input
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        type="text"
        placeholder="Email"
      />
      <hr></hr>
      <input
        value={form.age}
        onChange={(e) => setForm({ ...form, age: e.target.value })}
        type="text"
        placeholder="Age"
      />
      <hr></hr>
      <textarea
        value={form.area}
        onChange={(e) => setForm({ ...form, area: e.target.value })}
        placeholder="Area"
      />
      <hr></hr>
      <label htmlFor="check">Are you a student?</label>
      <input
        id="check"
        type="checkbox"
        checked={form.isStudent}
        onChange={(e) => setForm({ ...form, isStudent: e.target.checked })}
      />
      <hr></hr>
      <select
        value={form.country}
        onChange={(e) => setForm({ ...form, country: e.target.value })}
      >
        <option disabled>choose your country</option>
        <option value="India">India</option>
        <option value={"USA"}>USA</option>
        <option value={"UK"}>UK</option>
      </select>
      <hr></hr>
      <h2>Choose your favorite color:</h2>
      <label htmlFor="red">Red</label>
      <input
        name="color"
        id="red"
        type="radio"
        value="red"
        checked={form.color === "red"}
        onChange={(e) => setForm({ ...form, color: e.target.value })}
      />
      <br></br>
      <label htmlFor="blue">Blue</label>
      <input
        name="color"
        id="blue"
        type="radio"
        value={"blue"}
        checked={form.color === "blue"}
        onChange={(e) => setForm({ ...form, color: e.target.value })}
      />
      <br></br>
      <label htmlFor="green">Green</label>
      <input
        name="color"
        id="green"
        type="radio"
        value="green"
        onChange={(e) => setForm({ ...form, color: e.target.value })}
      />
      <br></br>
      <label htmlFor="black">Black</label>
      <input
        name="color"
        id="black"
        type="radio"
        value="black"
        onChange={(e) => setForm({ ...form, color: e.target.value })}
      />
      <hr></hr>
      <button type="submit">submit</button>
    </form>
  );
}

export default App;
