import Popup from "./PopUp";
import { useEffect, useState } from "react";
import ListItems from "./ListItems";

function Form() {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
    const [task, setTask] = useState({ id: -1, text: "", done: false });
    const [showPopup, setShowPopup] = useState(false);

    // useEffect(() => {
    //     const oldTasks = JSON.parse(localStorage.getItem("tasks"));
    //     console.log(oldTasks);

    //     if (oldTasks.length) {
    //         console.log(oldTasks);
    //         setTasks(oldTasks);
    //     }
    // }, []);
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    return (
        <>
            <form
                className="form"
                action="#"
                onSubmit={(e) => {
                    e.preventDefault();

                    if (e.target[0].value.trim()) {
                        const newTasks = [...tasks, task];
                        setTasks(newTasks);
                        // localStorage.setItem("tasks", JSON.stringify(newTasks));
                    } else {
                        setShowPopup(true);
                    }
                    setTask({ id: Date.now(), text: "", done: false });
                }}
            >
                {" "}
                {showPopup && (
                    <Popup
                        message="You must add a value!"
                        onClose={() => setShowPopup(false)}
                    />
                )}
                <input
                    name="task"
                    type="text"
                    placeholder="Enter a task"
                    value={task.text}
                    onChange={(e) =>
                        setTask({
                            id: Date.now(),
                            text: e.target.value,
                            done: false,
                        })
                    }
                />
                <button className="btn-add" type="submit">
                    Add
                </button>
            </form>
            <ListItems obj={{ tasks, setTasks }} />
        </>
    );
}

export default Form;
