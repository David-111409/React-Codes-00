import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    area: "",
    isStudent: false,
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
      <input
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        type="text"
        placeholder="Email"
      />
      <input
        value={form.age}
        onChange={(e) => setForm({ ...form, age: e.target.value })}
        type="text"
        placeholder="Age"
      />
      <textarea
        value={form.area}
        onChange={(e) => setForm({ ...form, area: e.target.value })}
        placeholder="Area"
      />
      <label htmlFor="check">Are you a student?</label>
      <input
        id="check"
        type="checkbox"
        checked={form.isStudent}
        onChange={(e) => setForm({ ...form, isStudent: e.target.checked })}
      />
      <button type="submit">submit</button>
    </form>
  );
}

export default App;
