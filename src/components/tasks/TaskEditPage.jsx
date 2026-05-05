import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TaskForm from "./TaskForm";

const TaskEditPage = () => {
    const { id } = useParams();
    const task = useSelector(state =>
        state.tasks.list.find(t => t.id === id)
    );

    return <TaskForm task={ task } isEdit />;
};

export default TaskEditPage;