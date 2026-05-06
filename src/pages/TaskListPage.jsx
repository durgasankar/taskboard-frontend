import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useToast from "../hooks/useToast";
import { fetchTasks } from "../reducers/taskThunks";
import { deleteTask } from "../reducers/taskSlices";
import TaskTable from "../components/tasks/TaskTable";
import DeleteConfirmDialog from "../components/tasks/DeleteConfirmDialog";
import { selectFilteredTasks } from "../reducers/taskSelector";

const TaskListPage = () => {
  const dispatch = useDispatch();
  // const tasks = useSelector(state => state.tasks.list);
  const tasks = useSelector(selectFilteredTasks);

  const { showToast } = useToast();

  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleDelete = () => {
    dispatch(deleteTask(deleteId));
    showToast("Task deleted successfully", "success");
    setDeleteId(null);
  };

  return (
    <>
      <TaskTable
        tasks={ tasks }
        onDelete={ id => setDeleteId(id) }
      />
      <DeleteConfirmDialog
        open={ !!deleteId }
        onClose={ () => setDeleteId(null) }
        onConfirm={ handleDelete }
      />
    </>
  );
};

export default TaskListPage;