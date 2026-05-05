import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk(
    "tasks/fetchTasks",
    async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        return await response.json();
    }
);