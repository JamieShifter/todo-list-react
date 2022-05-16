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
        }
    },
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks.tasks;
export const selectHideDone = state => selectTasks(state).hideDone;
export default tasksSlice.reducer;