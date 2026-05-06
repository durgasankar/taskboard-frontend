import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRandomPriority } from '../utils/priority';
import { getRandomUnixEndDateAfter, getRandomUnixStartDate } from "../utils/date";

export const fetchTasks = createAsyncThunk(
    "tasks/fetchTasks",
    async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        return data.map(_taskModifier);
    }
);

// adding extra modifications to the task
const _taskModifier = (task) => {
    const startDate = getRandomUnixStartDate();
    return {
        ...task,
        priority: getRandomPriority(),
        startDate,
        endDate: task.completed
            ? getRandomUnixEndDateAfter(startDate)
            : ""
    };
};
