import { useState, createContext } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";

export const todosContext = createContext([]);

function App() {
    const [todos, setTodos] = useState([]);
    return (
        <div
            className="App"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#191b1f",
                direction: "rtl",
            }}
        >
            <todosContext.Provider value={{ todos, setTodos }}>
                <ToDoList />
            </todosContext.Provider>
        </div>
    );
}

export default App;
