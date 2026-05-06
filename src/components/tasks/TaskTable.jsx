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
import { unixToDate } from '../../utils/date';

const headCells = [
    { id: "title", label: "Title" },
    { id: "completed", label: "Status" },
    { id: "startDate", label: "Start Date" },
    { id: "endDate", label: "End Date" },
    { id: "priority", label: "Priority" }
];

const TaskTable = ({ tasks, onDelete, onEdit, order, orderBy, onRequestSort }) => {
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
                        { headCells.map((headCell) => (
                            <TableCell
                                key={ headCell.id }
                                sortDirection={ orderBy === headCell.id ? order : false }
                                sx={ { fontWeight: 600, backgroundColor: "#fafafa" } }
                            >
                                <TableSortLabel
                                    active={ orderBy === headCell.id }
                                    direction={ orderBy === headCell.id ? order : "asc" }
                                    onClick={ () => onRequestSort(headCell.id) }
                                >
                                    { headCell.label }
                                </TableSortLabel>
                            </TableCell>
                        )) }
                        <TableCell align="right" sx={ { fontWeight: 600, backgroundColor: "#fafafa" } }>
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
                                    label={ task.completed ? 'Completed' : 'Pending' }
                                    style={ { borderRadius: '3px' } }
                                    color={ task?.completed ? "success" : "warning" }
                                />
                            </TableCell>
                            <TableCell>{ unixToDate(task.startDate) }</TableCell>
                            <TableCell>{ unixToDate(task.endDate) }</TableCell>
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
                                {
                                    !task.completed && <IconButton size="small" onClick={ () => onEdit(task) }>
                                        <EditIcon fontSize="small" />
                                    </IconButton>
                                }
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