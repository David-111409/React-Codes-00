import React, { useContext, useEffect } from "react";
import {
    Container,
    Card,
    CardContent,
    CardActions,
    Typography,
    Divider,
    TextField,
    Button,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToDoItem from "./ToDo";
import { TransitionGroup } from "react-transition-group";
import Collapse from "@mui/material/Collapse";
import { todosContext } from "../App.jsx";

function ToDoList() {
    const [alignment, setAlignment] = React.useState(
        localStorage.getItem("alignment")
            ? localStorage.getItem("alignment")
            : "الكل"
    );
    const [newTodo, setNewTodo] = React.useState("");
    const { todos, setTodos } = useContext(todosContext);

    useEffect(() => {
        localStorage.setItem("alignment", alignment);
    }, [alignment]);

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
        const storedAlignment = localStorage.getItem("alignment");
        if (storedAlignment) {
            setAlignment(storedAlignment);
        }
    }, []);
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const handleAdd = () => {
        if (!newTodo) return;
        const newItem = { id: Date.now(), text: newTodo, done: false };
        const updatedTodos = [...todos, newItem];
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setNewTodo("");
    };

    const onDelete = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const onToggleCompleted = (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        );
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setTodos(updatedTodos);
    };
    const onEdit = (id, newText) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, text: newText } : todo
        );
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setTodos(updatedTodos);
    };

    const filteredTodos =
        alignment === "الكل"
            ? todos
            : alignment === "منجز"
            ? todos.filter((t) => t.done)
            : todos.filter((t) => !t.done);
    return (
        <Container maxWidth="sm" sx={{ color: "white", textAlign: "center" }}>
            <Card
                sx={{
                    minWidth: 275,
                    maxHeight: "80vh",
                    overflow: "auto",
                    direction: "rtl",
                }}
            >
                <Typography
                    gutterBottom
                    sx={{ textAlign: "center", margin: 0 }}
                    variant="h2"
                >
                    مهامي
                </Typography>
                <Divider />

                <CardContent>
                    <Typography variant="h5" component="div">
                        <ToggleButtonGroup
                            color="secondary"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                            sx={{
                                margin: "10px 0",
                                textAlign: "center",
                                direction: "ltr",
                            }}
                        >
                            <ToggleButton value="غير منجز">
                                غير منجز
                            </ToggleButton>
                            <ToggleButton value="منجز">منجز</ToggleButton>
                            <ToggleButton value="الكل">الكل</ToggleButton>
                        </ToggleButtonGroup>
                    </Typography>

                    {/* TransitionGroup + Collapse */}
                    <TransitionGroup>
                        {filteredTodos.map((el) => (
                            <Collapse key={el.id}>
                                <ToDoItem
                                    todo={el}
                                    onDelete={() => onDelete(el.id)}
                                    onEdit={onEdit}
                                    onToggleCompleted={() =>
                                        onToggleCompleted(el.id)
                                    }
                                />
                            </Collapse>
                        ))}
                    </TransitionGroup>
                </CardContent>

                <CardActions
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "1rem",
                    }}
                >
                    <TextField
                        label="مهمة جديدة"
                        variant="outlined"
                        size="small"
                        sx={{
                            flex: 1,
                            marginRight: "10px",
                            marginLeft: "10px",
                        }}
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        onClick={handleAdd}
                    >
                        إضافة
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
}

export default ToDoList;
