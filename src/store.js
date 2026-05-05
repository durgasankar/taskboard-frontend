import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './reducers/taskSlices';

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
});