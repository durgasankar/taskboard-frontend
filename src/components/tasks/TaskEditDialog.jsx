import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    FormControlLabel,
    Checkbox
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useToast from "../../hooks/useToast";
import { updateTask } from "../../reducers/taskSlices";
import CustomTextInput from "../common/CustomTextInput";

const TaskEditDialog = ({ open, task, onClose }) => {
    const dispatch = useDispatch();
    const { successToast } = useToast();

    const [form, setForm] = useState({ title: "", completed: false });

    useEffect(() => {
        if (task) {
            setForm({
                title: task.title ?? "",
                completed: task.completed ?? false
            });
        }
    }, [task]);

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSave = () => {
        dispatch(
            updateTask({
                ...task,
                title: form.title,
                completed: form.completed
            })
        );
        successToast("Task updated successfully");
        onClose();
    };

    if (!task) return null;

    return (
        <Dialog open={ open } onClose={ onClose } maxWidth="sm" fullWidth>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogContent dividers>
                <CustomTextInput
                    label="Task Title"
                    name="title"
                    value={ form.title }
                    onChange={ handleChange }
                    required
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={ form.completed }
                            name="completed"
                            onChange={ handleChange }
                        />
                    }
                    label="Completed"
                    sx={ { mt: 1 } }
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={ onClose }>Cancel</Button>
                <Button
                    variant="contained"
                    onClick={ handleSave }
                    disabled={ !form.title.trim() }
                >
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default TaskEditDialog;