import React, { useRef, useState } from "react";

function App() {
    const [todos, setTodos] = useState([]);
    const ref = useRef();
    function handleAdd() {
        const newTodo = ref.current.value;
        if (newTodo) {
            setTodos([
                ...todos,
                { id: Date.now(), name: newTodo, done: false },
            ]);
        }
        ref.current.value = "";
    }
    const handleDone = (currentId) => {
        const newTodos = todos.map((todo) =>
            todo.id === currentId ? { ...todo, done: !todo.done } : todo
        );
        setTodos(newTodos);
    };
    const handleClose = (currentId) => {
        const newTodos = todos.filter((todo) => todo.id !== currentId);
        setTodos(newTodos);
    };
    return (
        <div className="App">
            <h2>To Do List</h2>
            <div className="todo-container">
                <ul>
                    {todos.map((todo) => (
                        <div className={"todo"}>
                            <li
                                key={todo.id}
                                onClick={() => handleDone(todo.id)}
                                className={todo.done ? "done" : ""}
                            >
                                {todo.name}
                            </li>
                            <span
                                className="close"
                                onClick={() =>
                                    handleClose(todo.id)
                                }
                            >
                                X
                            </span>
                        </div>
                    ))}
                </ul>
                <input
                    placeholder="Enter a todo item..."
                    type="text"
                    ref={ref}
                />
                <button onClick={handleAdd}>Add</button>
            </div>
        </div>
    );
}

export default App;
