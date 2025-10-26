import "./style.css";
import { useState } from "react";
const odlTasks = [
  { id: 1, text: "Learn React", done: false },
  { id: 2, text: "Build a Project", done: false },
  { id: 3, text: "Practice Daily", done: true },
];

function App() {
  const [tasks, setTasks] = useState(odlTasks);
  const [newTask, setNewTask] = useState("");
  function toggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function addTask() {
    if (!newTask.trim()) return;
    const newItem = { id: Date.now(), text: newTask.trim(), done: false };
    setTasks([...tasks, newItem]);
    setNewTask("");
  }
  let totalCount = tasks.length;
  let doneCount = tasks.filter((task) => task.done).length;
  return (
    <>
      <div className="add-task">
        <input
          type="text"
          className="task-input"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li className={task.done ? "done task" : "task"} key={task.id}>
            {task.text}{" "}
            <button className="toggle" onClick={() => toggleTask(task.id)}>
              {task.done ? "↩" : "✓"}
            </button>
          </li>
        ))}
      </ul>
      <p className="summary">
        Completed: <span className="completed">{doneCount}</span> /{" "}
        <span className="total"> {totalCount}</span> Tasks
      </p>
    </>
  );
}

export default App;


/**
 * 
 * /* ===== Root Variables for Easy Scaling ===== */
// :root {
//     --bg: #f8f9fa;
//     --text: #212529;
//     --primary: #007bff;
//     --primary-dark: #0056b3;
//     --success: #28a745;
//     --gray: #6c757d;
//     --radius: 10px;
//     --shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
//     --transition: 0.25s ease;
//     --font-size: 16px;
//   }
  
  /* ===== Base Layout ===== */
//   body {
//     font-family: "Poppins", sans-serif;
//     background-color: var(--bg);
//     color: var(--text);
//     display: flex;
//     justify-content: center;
//     align-items: flex-start;
//     min-height: 100vh;
//     padding: 40px 16px;
//     margin: 0;
//   }
  
//   #root {
//     width: 100%;
//     max-width: 500px;
//   }
  
//   /* ===== Task List ===== */
//   ul {
//     list-style: none;
//     padding: 0;
//     margin: 0;
//   }
  
//   /* Task item (stable layout, flexible design) */
//   .task {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     background: #fff;
//     border-radius: var(--radius);
//     padding: 12px 16px;
//     margin-bottom: 12px;
//     box-shadow: var(--shadow);
//     font-size: var(--font-size);
//     transition: background var(--transition), transform var(--transition);
//   }
  
//   .task:hover {
//     background: #f1f3f5;
//     transform: translateY(-2px);
//   }
  
//   /* Completed task (no layout shift) */
//   .task.done {
//     background: #e9ecef;
//     text-decoration: line-through;
//     color: var(--gray);
//   }
  
//   .task .text {
//     flex: 1;
//     transition: color var(--transition), opacity var(--transition);
//   }
  
//   .task.done .text {
//     text-decoration: line-through;
//     opacity: 0.7;
//   }
  
//   /* ===== Toggle Button ===== */
//   button.toggle {
//     background-color: var(--primary);
//     color: white;
//     border: none;
//     border-radius: 6px;
//     padding: 6px 12px;
//     font-size: 0.9rem;
//     cursor: pointer;
//     transition: background var(--transition), transform var(--transition);
//     flex-shrink: 0;
//   }
  
//   button.toggle:hover {
//     background-color: var(--primary-dark);
//     transform: scale(1.05);
//   }
  
//   .task.done button.toggle {
//     background-color: var(--gray);
//   }
  
//   .task.done button.toggle:hover {
//     background-color: #5a6268;
//   }
  
//   /* ===== Summary Section ===== */
//   .summary {
//     margin-top: 24px;
//     text-align: center;
//     font-size: var(--font-size);
//     background: #fff;
//     padding: 12px 0;
//     border-radius: var(--radius);
//     box-shadow: var(--shadow);
//   }
  
//   .summary .completed {
//     color: var(--success);
//     font-weight: bold;
//   }
  
//   .summary .total {
//     color: var(--primary);
//     font-weight: bold;
//   }
//   .task-input {
//     width: 100%;
//     max-width: 400px;
//     padding: 10px 15px;
//     font-size: 1rem;
//     border: 2px solid #ddd;
//     border-radius: 8px;
//     outline: none;
//     margin-bottom: 1rem;
//     transition: border-color 0.3s ease, box-shadow 0.3s ease;
//   }
  
//   .task-input:focus {
//     border-color: #4caf50;
//     box-shadow: 0 0 5px rgba(76, 175, 80, 0.4);
//   }
  
//   .add-btn {
//     padding: 14px 26px;
//     background-color: #2563eb;
//     color: #fff;
//     border: none;
//     border-radius: 10px;
//     font-size: 18px;
//     font-weight: 600;
//     cursor: pointer;
//     transition: background-color 0.25s ease, transform 0.1s ease;
//     white-space: nowrap;
//     box-shadow: 0 4px 10px rgba(37, 99, 235, 0.3);
//   }
  
//   .add-btn:hover {
//     background-color: #1e40af;
//   }
  
//   .add-btn:active {
//     transform: scale(0.96);
//   }
  
//   .add-btn:hover {
//     background-color: #45a049;
//   }
  
//   .add-btn:active {
//     transform: scale(0.97);
//   }
//   .add-task {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 10px;
//     max-width: 500px;
//     margin: 20px auto;
//     padding: 10px;
//     flex-wrap: wrap; /* makes it responsive on small screens */
//   }
//   /* Responsive */
//   @media (max-width: 500px) {
//     .task-input {
//       max-width: 100%;
//       font-size: 0.9rem;
//     }
//     .add-btn {
//       width: 100%;
//       margin-top: 0.5rem;
//     }
//   }
  
//   /* ===== Responsive Design ===== */
//   @media (max-width: 600px) {
//     body {
//       padding: 24px 12px;
//     }
  
//     .task {
//       flex-direction: column;
//       align-items: flex-start;
//       gap: 8px;
//     }
  
//     button.toggle {
//       align-self: flex-end;
//       font-size: 0.85rem;
//       padding: 6px 10px;
//     }
  
//     .summary {
//       font-size: 0.9rem;
//     }
//   }
  
//   @media (min-width: 1000px) {
//     :root {
//       --font-size: 18px;
//     }
  
//     button.toggle {
//       font-size: 1rem;
//       padding: 8px 14px;
//     }
  
//     .summary {
//       font-size: 18px;
//     }
//   }
  
 //
