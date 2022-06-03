import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sageMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: [sageMiddleware]
});

sageMiddleware.run(rootSaga);

export default store;