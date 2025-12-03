import Item from "./Item";
function ListItems({ obj: { tasks, setTasks } }) {
    function handleDone(id) {
        const newTasks = tasks.map((task) =>
            task.id === id ? { ...task, done: !task.done } : task
        );

        setTasks(newTasks);
        // localStorage.setItem("tasks", JSON.stringify(newTasks));
    }
    function handleDelete(id) {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
        // localStorage.setItem("tasks", JSON.stringify(newTasks));
    }
    if (tasks.length) {
        return (
            <ul >
                {tasks.map((task) => (
                    <Item
                        key={task.id}
                        task={task}
                        handleDelete={handleDelete}
                        handleDone={handleDone}
                    />
                ))}
            </ul>
        );
    }
}

export default ListItems;
