import { useRef, useEffect, useReducer, useMemo } from "react";
import "./CSS/todo.css";

let id = localStorage.getItem("count") || 0;
let notTick = "./assets/not_tick.png";
let tick = "./assets/tick.png";

function Todo() {
    let initial = () => {
        let data = localStorage.getItem("todos");
        return JSON.parse(data) || [];
    };

    const inputRef = useRef("");

    const [todos, dispatch] = useReducer(reducer, [], initial);

    function reducer(todos, action) {
        switch (action.type) {
            case "ADD":
                let v = inputRef.current.value;
                if (v) {
                    return [...todos, action.payload];
                }
            case "TOG":
                return todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return { ...todo, done: !todo.done };
                    }
                    return todo;
                });
            case "DELETE":
                return todos.filter((todo) => todo.id !== action.payload);
            default:
                return todos;
        }
    }

    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem("todos", JSON.stringify(todos));
        }, 100);
        localStorage.setItem("count", id);
    }, [todos]);

    return (
        <div className="todo">
            <div className="todo-header">To-Do List</div>
            <div className="todo-add">
                <input
                    ref={inputRef}
                    type="text"
                    className="todo-input"
                    placeholder="Add Your Task..."
                />
                <button
                    className="todo-add-btn"
                    onClick={() => {
                        dispatch({
                            type: "ADD",
                            payload: {
                                id: id++,
                                todo: inputRef.current.value,
                                done: false,
                            },
                        });
                        setTimeout(() => (inputRef.current.value = ""), 10);
                    }}
                >
                    ADD
                </button>
            </div>
            <div className="todo-list">
                {todos.map((todo) => {
                    console.log(todo);
                    return (
                        <div className="item" key={todo.id}>
                            <div
                                className="todo-item"
                                onClick={() =>
                                    dispatch({ type: "TOG", payload: todo.id })
                                }
                                style={{
                                    textDecoration: todo.done
                                        ? "line-through solid rgb(214, 202, 207)"
                                        : "",
                                }}
                            >
                                {" "}
                                <img src={todo.done ? tick : notTick} alt="" />
                                {todo.todo}
                            </div>

                            <button
                                className="close"
                                onClick={() =>
                                    dispatch({
                                        type: "DELETE",
                                        payload: todo.id,
                                    })
                                }
                            >
                                delete
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Todo;
