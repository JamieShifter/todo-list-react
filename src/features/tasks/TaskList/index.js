import { StyledTasks, TaskItem, TaskButton, TaskContent } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from "../tasksSlice";

const TaskList = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();
    return (
        <StyledTasks>
        {tasks.map(task => (
            <TaskItem hidden={task.done && hideDone} key={task.id}>
                <TaskButton
                    done={task.done}
                    onClick={() => dispatch(toggleTaskDone(task.id))}
                >
                    {task.done ? "✓" : ""}
                </TaskButton>
                <TaskContent done={task.done}>
                    {task.content}
                </TaskContent>
                <TaskButton trash
                    onClick={() => dispatch(removeTask(task.id))}
                >
                    🗑
                </TaskButton>
            </TaskItem>
        ))}
    </StyledTasks>
    )
};

export default TaskList;