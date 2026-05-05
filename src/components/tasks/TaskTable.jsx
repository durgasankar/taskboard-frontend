import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
    IconButton
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const columns = ["title", "assignedTo", "status", "priority"];

const TaskTable = ({ tasks, onDelete }) => {
    const navigate = useNavigate();

    return (
        <Table>
            <TableHead>
                <TableRow>
                    { columns.map(col => (
                        <TableCell key={ col }>
                            <TableSortLabel>{ col }</TableSortLabel>
                        </TableCell>
                    )) }
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                { tasks.map(task => (
                    <TableRow
                        key={ task.id }
                        hover
                        sx={ { cursor: "pointer" } }
                        onClick={ () => navigate(`/tasks/${task.id}`) }
                    >
                        <TableCell>{ task.title }</TableCell>
                        <TableCell>{ task.assignedTo }</TableCell>
                        <TableCell>{ task.status }</TableCell>
                        <TableCell>{ task.priority }</TableCell>
                        <TableCell onClick={ e => e.stopPropagation() }>
                            <IconButton onClick={ () => navigate(`/tasks/edit/${task.id}`) }>
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={ () => onDelete(task.id) }>
                                <DeleteIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                )) }
            </TableBody>
        </Table>
    );
};

export default TaskTable;