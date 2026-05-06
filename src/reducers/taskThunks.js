import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRandomPriority } from '../utils/priority';

export const fetchTasks = createAsyncThunk(
    "tasks/fetchTasks",
    async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        return data.map(task => ({
            ...task,
            priority: getRandomPriority()
        }))
    }
);