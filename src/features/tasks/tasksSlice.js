import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false
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
            const index = tasks.findIndex(({id}) => id === task_id);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({tasks}, {payload: task_id}) => {
            const index = tasks.findIndex(({id}) => id === task_id);
            tasks.splice(index, 1);
        },
        setAllDone: state => {
            state.tasks.map(task => task.done = true);
        },
        fetchExampleTasks: () => {},
        setTasks: (state, {payload: tasks}) => {
            state.tasks = tasks;
        }
    },
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone, fetchExampleTasks, setTasks } = tasksSlice.actions;
export const selectTasks = state => state.tasks.tasks;
export const selectHideDone = state => selectTasks(state).hideDone;
export default tasksSlice.reducer;