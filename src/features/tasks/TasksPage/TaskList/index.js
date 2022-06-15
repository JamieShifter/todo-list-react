import { StyledTasks, TaskItem, TaskButton, TaskContent, TaskLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import searchQueryParamName from "../../searchQueryParamName";
import { useQueryParameter } from "../queryParameters";


const TaskList = () => {
    const query = useQueryParameter(searchQueryParamName);
    const tasks = useSelector(state => selectTasksByQuery(state, query));
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
                        <TaskLink to={`/zadania/${task.id}`}>{task.content}</TaskLink>
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