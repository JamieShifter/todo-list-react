import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [
            { id: 1, content: "Dodać nowe zadanie", done: false },
            { id: 2, content: "Zjeść obiad", done: true }
        ],
        hideDone: false
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone
        },
        toggleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({id}) => id === payload);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({tasks}, {payload}) => {
            const index = tasks.findIndex(({id}) => id === payload);
            tasks.splice(index, 1);
        },
        setAllDone: state => {
            state.tasks.map(task => task.done = true);
        }
    },
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;