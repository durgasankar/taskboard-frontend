import { useEffect, useMemo, useState, lazy, Suspense, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, Skeleton } from "@mui/material";
import useToast from "../hooks/useToast";
import { fetchTasks } from "../reducers/taskThunks";
import { deleteTask, setCurrentPage } from "../reducers/taskSlices";
import DeleteConfirmDialog from "../components/tasks/DeleteConfirmDialog";
import { selectFilteredTasks, selectPagedTasks } from '../reducers/taskSelector';
import TaskEditDialog from "../components/tasks/TaskEditDialog";
// Lazily loaded the table and inplace of that dummy rect box is visualized initially
const TaskTable = lazy(() => import("../components/tasks/TaskTable"));

const Dashboard = () => {
    const dispatch = useDispatch();
    const { successToast } = useToast();
    const tasks = useSelector(selectPagedTasks);
    const filteredTasks = useSelector(selectFilteredTasks);
    const { pageSize, currentPage } = useSelector(state => state.tasks);

    const [deleteId, setDeleteId] = useState(null);
    const [editTask, setEditTask] = useState(null);


    const totalPages = useMemo(() => {
        return Math.ceil(filteredTasks.length / pageSize);
    }, [filteredTasks.length, pageSize]);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const handleDelete = useCallback(() => {
        dispatch(deleteTask(deleteId));
        successToast("Task deleted successfully", "success");
        setDeleteId(null);
    }, [dispatch, deleteId, successToast]);


    return (
        <>
            <Suspense fallback={ <Skeleton variant="rectangular" height={ 300 } /> }>
                <TaskTable
                    tasks={ tasks }
                    onDelete={ id => setDeleteId(id) }
                    onEdit={task => setEditTask(task)}
                />
            </Suspense>
            <Pagination
                count={ totalPages }
                page={ currentPage }
                onChange={ (e, page) => dispatch(setCurrentPage(page)) }
                color="primary"
                sx={ { display: "flex", justifyContent: "center", mt: 2 } }
            />
            <DeleteConfirmDialog
                open={ !!deleteId }
                onClose={ () => setDeleteId(null) }
                onConfirm={ handleDelete }
            />
            <TaskEditDialog
                open={ !!editTask }
                onClose={ () => setEditTask(null) }
                task={ editTask }
            />
        </>
    );
};

export default Dashboard;