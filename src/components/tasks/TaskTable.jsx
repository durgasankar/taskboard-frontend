import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
    IconButton,
    Chip,
    Box
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const TaskTable = ({ tasks, onDelete }) => {
    const navigate = useNavigate();

    return (
        <Box sx={ { overflowX: "auto" } }>
            <Table
                size="small"
                stickyHeader
                sx={ {
                    "& td, & th": {
                        px: 1.5,
                        py: 0.5
                    }
                } }
            >
                <TableHead>
                    <TableRow>
                        { ["Title", "Status", "Priority"].map(col => (
                            <TableCell
                                key={ col }
                                sx={ { fontWeight: 600, backgroundColor: "#fafafa" } }
                            >
                                <TableSortLabel>{ col }</TableSortLabel>
                            </TableCell>
                        )) }
                        <TableCell
                            sx={ { fontWeight: 600, backgroundColor: "#fafafa" } }
                            align="right"
                        >
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { tasks.map(task => (
                        <TableRow
                            key={ task.id }
                            hover
                            sx={ {
                                cursor: "pointer",
                                "&:hover": { backgroundColor: "#f9fbff" }
                            } }
                            onClick={ () => navigate(`/tasks/${task.id}`) }
                        >
                            <TableCell>{ task.title }</TableCell>
                            <TableCell>
                                <Chip
                                    size="small"
                                    label={ task.completed ? 'Completed': 'Pending' }
                                    style={{borderRadius: '3px'}}
                                    color={task?.completed ? "success": "warning"}
                                />
                            </TableCell>
                            <TableCell>
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
                            </TableCell>
                            <TableCell
                                align="right"
                                onClick={ e => e.stopPropagation() }
                            >
                                <IconButton size="small">
                                    <EditIcon fontSize="small" />
                                </IconButton>
                                <IconButton size="small" color="error">
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    )) }
                </TableBody>
            </Table>
        </Box>
    );
};

export default TaskTable;