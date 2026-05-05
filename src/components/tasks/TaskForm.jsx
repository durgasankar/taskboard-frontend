import { useState } from "react";
import { MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateTask } from "../../reducers/taskSlices";
import CustomTextInput from "../common/CustomTextInput";
import CustomButton from "../common/CustomButton";

const TaskForm = ({ task }) => {
    const dispatch = useDispatch();
    const [form, setForm] = useState(task);

    const handleSubmit = () => {
        dispatch(updateTask(form));
    };

    return (
        <>
            <CustomTextInput
                label="Title"
                value={ form.title }
                onChange={ e => setForm({ ...form, title: e.target.value }) }
            />

            <CustomTextInput
                label="Assigned To"
                value={ form.assignedTo }
                onChange={ e => setForm({ ...form, assignedTo: e.target.value }) }
            />

            <CustomTextInput
                select
                label="Status"
                value={ form.status }
                onChange={ e => setForm({ ...form, status: e.target.value }) }
            >
                { ["Open", "In-Progress", "Under-review", "Done"].map(s => (
                    <MenuItem key={ s } value={ s }>{ s }</MenuItem>
                )) }
            </CustomTextInput>

            <CustomButton onClick={ handleSubmit }>Save</CustomButton>
        </>
    );
};

export default TaskForm;