import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredTasks = createSelector(
    state => state.tasks.list,
    state => state.tasks.searchQuery,
    (tasks = [], search = "") => {
        if (!search.trim()) return tasks;
        const query = search.toLowerCase();
        return tasks.filter(task => {
            const title = task.title?.toLowerCase() || '';
            return (
                title.includes(query)
            );
        });
    }
);

export const selectPagedTasks = createSelector(
    selectFilteredTasks,
    state => state.tasks.currentPage,
    state => state.tasks.pageSize,
    (filteredTasks, currentPage, pageSize) => {
        const start = (currentPage - 1) * pageSize;
        return filteredTasks.slice(start, start + pageSize);
    }
);