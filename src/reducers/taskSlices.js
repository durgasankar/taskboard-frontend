import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./taskThunks";

const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        list: [],
        loading: false,
        error: null,
        // pagination
        searchQuery: ''
    },
    reducers: {
        deleteTask(state, action) {
            state.list = state.list.filter(task => task.id !== action.payload);
        },
        updateTask(state, action) {
            const index = state.list.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state.list[index] = action.payload;
            }
        },
        setSearchQuery(state, action) {
            state.searchQuery = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTasks.pending, state => {
                state.loading = true;
            }).addCase(fetchTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            }).addCase(fetchTasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Something went wrong';
            })
    }
});

export const { deleteTask, updateTask, setSearchQuery } = taskSlice.actions;
export default taskSlice.reducer;