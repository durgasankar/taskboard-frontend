import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Chip, Typography, Divider, Skeleton } from "@mui/material";
import { unixToDate } from "../utils/date";
import CustomButton from "../components/common/CustomButton";

const TaskDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { list } = useSelector(state => state.tasks);

    const task = list.find(t => t.id === Number(id));
    if (!task) {
        return <Navigate to="/tasks" replace />;
    }

    const startDate = unixToDate(task.startDate);
    const endDate = unixToDate(task.endDate)

    return (
        <Box sx={ { p: 3 } }>
            <CustomButton
                variant="text"
                size="small"
                onClick={ () => navigate("/tasks") }
                className="back-btn"
            >
                ← Back to all tasks
            </CustomButton>
            <br />
            <Typography variant="h5" gutterBottom>
                { task.title }
            </Typography>
            <Divider sx={ { my: 2 } } />
            <Typography>
                <strong>Status:</strong>{ " " }
                <Chip
                    size="small"
                    label={ task.completed ? "Completed" : "Pending" }
                    color={ task.completed ? "success" : "warning" }
                />
            </Typography>
            <Typography sx={ { mt: 1 } }>
                <strong>Priority:</strong>{ " " }
                <Chip
                    size="small"
                    label={ task.priority }
                    color={
                        task.priority === "P0"
                            ? "error"
                            : task.priority === "P1"
                                ? "warning"
                                : "success"
                    }
                />
            </Typography>
            <Typography sx={ { mt: 1 } }>
                <strong>Start Date:</strong> { startDate }
            </Typography>
            <Typography sx={ { mt: 1 } }>
                <strong>End Date:</strong> { endDate !== "" ? endDate : 'Not yet completed' }
            </Typography>
        </Box>
    );
};

export default TaskDetailsPage;