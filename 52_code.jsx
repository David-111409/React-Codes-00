import React, { useState } from "react";
// import "./index.css";
function App() {
    const [form, setForm] = useState({
        name: "",
        age: "",
        phone: "",
        student: false,
        salary: "",
    });
    function handleSubmit(e) {
        e.preventDefault();
        const final = { ...form, age: Number(form.age) };
        console.log(final);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                value={form.name}
                type="text"
                placeholder="name"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
                value={form.phone}
                type="text"
                placeholder="Phone Number:"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <input
                value={form.age}
                type="text"
                placeholder="age"
                onChange={(e) => setForm({ ...form, age: e.target.value })}
            />
            <label htmlFor="question">Are you a student?</label>
            <input
                id="question"
                type="checkbox"
                checked={form.student}
                onChange={(e) =>
                    setForm({ ...form, student: e.target.checked })
                }
            />
            <select
                name="salary"
                id="salary"
                value={form.salary}
                onChange={(e) => setForm({ ...form, salary: e.target.value })}
            >
                <option disabled value={""}>
                    Select your salary
                </option>
                <option value="0-5000">0-5000</option>
                <option value="5000-10000">5000-10000</option>
                <option value="10000-15000">10000-15000</option>
            </select>
            <button type="submit">Login</button>
        </form>
    );
}

export default App;
