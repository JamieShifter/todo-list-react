import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        fetchingStatus: false
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            if (state.tasks.some(task => task.done === true)) {
                state.hideDone = !state.hideDone
            }
        },
        toggleTaskDone: ({ tasks }, { payload: task_id }) => {
            const index = tasks.findIndex(({ id }) => id === task_id);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: task_id }) => {
            const index = tasks.findIndex(({ id }) => id === task_id);
            tasks.splice(index, 1);
        },
        setAllDone: state => {
            state.tasks.map(task => task.done = true);
        },
        fetchExampleTasks: (state) => {
            state.fetchingStatus = true;
        },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
        finishFetching: (state, { payload: tasks }) => {
            state.fetchingStatus = false;
            state.tasks = tasks;
        }
    },
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone, fetchExampleTasks, setTasks, finishFetching } = tasksSlice.actions;
export const selectTasks = state => state.tasks.tasks;
export const selectHideDone = state => state.tasks.hideDone;
export const getTaskById = (state, taskId) => 
    selectTasks(state).find(({ id }) => id === taskId);
    
export const selectFetchingStatus = state => state.tasks.fetchingStatus;

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    // ważne! jeśli query jest puste, zwróć wszystkie taski
    if (!query || query.trim() === "") {
        return tasks;
    };

    return selectTasks(state).filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
}


export default tasksSlice.reducer;