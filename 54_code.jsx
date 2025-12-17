import React, { useState } from "react";
import Input from "./Input";
/**
 Input.jsx
 import React from "react";

export default function Input({ name, handleChange }) {
    return (
        <>
            <label style={{width: "90px", display: "inline-block"}} htmlFor={name}>{name}: </label>
            <input
                id={name}
                type="text"
                onChange={(e) => handleChange(e.target.value)}
            />
            <hr />
        </>
    );
}

 */
function App() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
    });
    const handleNameChange = (v) => {
        setForm({ ...form, name: v });
    };
    const handleEmailChange = (v) => {
        setForm({ ...form, email: v });
    };
    const handlePasswordChange = (v) => {
        setForm({ ...form, password: v });
    };
    const handleAgeChange = (v) => {
        setForm({ ...form, age: v });
    };
    console.log(form);
    return (
        <div className="App">
            <Input name="name" handleChange={handleNameChange} />
            <Input name="email" handleChange={handleEmailChange} />
            <Input name="password" handleChange={handlePasswordChange} />
            <Input name="age" handleChange={handleAgeChange} />
        </div>
    );
}

export default App;
