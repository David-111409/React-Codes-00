/*
const todos = [
  { id: 1, title: "Learn React", completed: true },
  { id: 2, title: "Practice list rendering", completed: false },
  { id: 3, title: "Build a small project", completed: false }
];
✔️ Learn React
❌ Practice list rendering
❌ Build a small project

*/
import "./style.css";
function App() {
  const todos = [
    { id: 1, title: "Learn React", completed: true },
    { id: 2, title: "Practice list rendering", completed: false },
    { id: 3, title: "Build a small project", completed: false },
  ];
  const tasks = todos.map((todo) => (
    <li
      key={todo.id}
      className={todo.completed ? "todo-item" + " " + "completed" : "todo-item"}
    >
      {todo.completed ? "✔️" : "❌"} {todo.title}
    </li>
  ));
  return (
    <div className="todo-list">
      <h1>Todo list</h1>
      <ul>{tasks}</ul>
    </div>
  );
}
export default App;


/**
 style.css

.todo-list {
    width: 320px;
    margin: 30px auto;
    padding: 0;
    list-style: none;
  }
  h1{
    text-align: center;
  }
  .todo-item {
    background: #f7f9fc;
    border-radius: 10px;
    padding: 12px 16px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Segoe UI', sans-serif;
    font-size: 16px;
    color: #333;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    cursor: pointer;
  }
  
  .todo-item.completed {
    background: #e6ffed;
    text-decoration: line-through;
    color: #2b7a0b;
  }
  
  .todo-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }
 */
