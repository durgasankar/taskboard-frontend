import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useToast from "../hooks/useToast";
import { fetchTasks } from "../reducers/taskThunks";
import { deleteTask, setCurrentPage } from "../reducers/taskSlices";
import TaskTable from "../components/tasks/TaskTable";
import DeleteConfirmDialog from "../components/tasks/DeleteConfirmDialog";
import { selectFilteredTasks, selectPagedTasks } from '../reducers/taskSelector';
import { Pagination } from "@mui/material";

const Dashboard = () => {
    const dispatch = useDispatch();
    const { successToast } = useToast();
    const tasks = useSelector(selectPagedTasks);
    const filteredTasks = useSelector(selectFilteredTasks);
    const { pageSize, currentPage } = useSelector(state => state.tasks);

    const [deleteId, setDeleteId] = useState(null);

    const totalPages = useMemo(() => {
        return Math.ceil(filteredTasks.length / pageSize);
    }, [filteredTasks.length, pageSize]);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const handleDelete = () => {
        dispatch(deleteTask(deleteId));
        successToast("Task deleted successfully", "success");
        setDeleteId(null);
    };

    return (
        <>
            <TaskTable
                tasks={ tasks }
                onDelete={ id => setDeleteId(id) }
            />

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
        </>
    );
};

export default Dashboard;