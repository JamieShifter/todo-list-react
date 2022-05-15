import { StyledTasks, TaskItem, TaskButton, TaskContent } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";

const TaskList = () => {
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <StyledTasks>
        {tasks.map(task => (
            <TaskItem hidden={task.done && hideDone}>
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