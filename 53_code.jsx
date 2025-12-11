import React, { useState } from "react";
import Input from "./components/Input";
import NameInput from "./components/Component";
import Component from "./components/Component";
/*
import Input from "./Input";
export default function Component({ value, handleChage }) {
    return <Input value={value} handleChage={handleChage} />;
}
 */
/*
export default function Input({ value, handleChage }) {
    return (
        <input value={value} onChange={(e) => handleChage(e.target.value)} />
    );
}
 */

function App() {
    const [wrap, setWrap] = useState(false);
    return (
        <div
            title="Hello World for the first time hello world for the second time!"
            className={wrap ? "root long" : "root short"}
            onClick={() => setWrap(true)}
        >
            Hello World Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Accusantium dignissimos tempora accusamus voluptate
            perferendis officiis quibusdam. Ut porro maxime in!
        </div>
    );
    // const [form, setForm] = useState({ name: "", email: "" });
    // function handleNameChange(value) {
    //     console.log(form.name);
    //     setForm({ ...form, name: value });
    // }
    // function handleEmailChange(value) {
    //     console.log(form.email);
    //     setForm({ ...form, email: value });
    // }
    // return (
    //     <>
    //         <Component
    //             value={form.name}
    //             handleChage={ handleNameChange}
    //         />
    //         <NameInput
    //             value={form.email}
    //             handleChage={handleEmailChange}
    //         />

    //     </>
    // );
}

export default App;
