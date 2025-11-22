import React, { useState } from "react";
import { Box, Typography, Modal, TextField, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    bgcolor: "#1b263b",
    borderRadius: 2,
    boxShadow: 24,
    p: 3,
    color: "white",
};

function ToDo({ todo, onToggleCompleted, onEdit, onDelete }) {
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleSaveEdit = () => {
        if (newText.trim() === "") return;
        onEdit(todo.id, newText);
        setOpenEdit(false);
    };

    const handleConfirmDelete = () => {
        onDelete(todo.id);
        setOpenDelete(false);
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#0d1b2a",
                    padding: "0.7rem 1rem",
                    borderRadius: "8px",
                    color: "white",
                    marginBottom: "0.5rem",
                    transition: "0.3s",
                }}
            >
                {/* Todo Text */}
                <Typography
                    onClick={() => onToggleCompleted(todo.id)}
                    sx={{
                        fontSize: "1.4rem",
                        flex: 1,
                        textAlign: "right",
                        textDecoration: todo.done ? "line-through" : "none",
                        opacity: todo.done ? 0.5 : 1,
                        cursor: "pointer",
                        transition: "all .5s",
                    }}
                >
                    {todo.text}
                </Typography>

                {/* Icons */}
                <Box sx={{ display: "flex", gap: 1 }}>
                    {todo.done ? (
                        <CheckCircleIcon
                            sx={{ cursor: "pointer", color: "#4CAF50" }}
                            onClick={onToggleCompleted}
                        />
                    ) : (
                        <RadioButtonUncheckedIcon
                            sx={{ cursor: "pointer", color: "#ccc" }}
                            onClick={onToggleCompleted}
                        />
                    )}

                    <EditIcon
                        sx={{ cursor: "pointer", color: "#f4a261" }}
                        onClick={() => {
                            setNewText(todo.text);
                            setOpenEdit(true);
                        }}
                    />
                    <DeleteIcon
                        sx={{ cursor: "pointer", color: "#e63946" }}
                        onClick={() => setOpenDelete(true)}
                    />
                </Box>
            </Box>

            <Modal open={openEdit} onClose={() => setOpenEdit(false)}>
                <Box sx={modalStyle}>
                    <Typography variant="h6" gutterBottom>
                        تعديل المهمة
                    </Typography>
                    <TextField
                        fullWidth
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        sx={{
                            mb: 2,
                            input: { color: "white" }, // text color
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "white" }, // border color
                                "&:hover fieldset": { borderColor: "#f4a261" }, // hover border
                                "&.Mui-focused fieldset": {
                                    borderColor: "#4CAF50",
                                }, // focus border
                            },
                        }}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            gap: 1,
                        }}
                    >
                        <Button
                            variant="contained"
                            color="success"
                            onClick={handleSaveEdit}
                        >
                            حفظ
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => setOpenEdit(false)}
                        >
                            إلغاء
                        </Button>
                    </Box>
                </Box>
            </Modal>

            {/* Delete Modal */}
            <Modal open={openDelete} onClose={() => setOpenDelete(false)}>
                <Box sx={modalStyle}>
                    <Typography variant="h6" gutterBottom>
                        هل أنت متأكد من حذف المهمة؟
                    </Typography>
                    <Typography sx={{ mb: 2 }}>
                        إذا قمت بالحذف لن يمكنك إعادة المهمة مرة أخرى.
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            gap: 1,
                        }}
                    >
                        <Button
                            variant="contained"
                            color="error"
                            onClick={handleConfirmDelete}
                        >
                            حذف
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => setOpenDelete(false)}
                        >
                            إلغاء
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}

export default ToDo;
