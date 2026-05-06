import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredTasks = createSelector(
    (state) => state.tasks.list,
    (state) => state.tasks.searchQuery,
    (tasks, searchQuery) => {
        if (!searchQuery) return tasks;
        return tasks.filter((task) =>
            task.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
);
