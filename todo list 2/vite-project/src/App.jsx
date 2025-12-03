import React, { useState } from "react";
import "./index.css";
import Title from "./components/Title";
import FormWithList from "./components/Form";
function App() {

    return (
        <main id="main">
            <div className="container">
                <div className="todo-list">
                    <Title />
                    <FormWithList />
                </div>
            </div>
        </main>
    );
}

export default App;
