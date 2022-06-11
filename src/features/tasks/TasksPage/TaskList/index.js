import { StyledTasks, TaskItem, TaskButton, TaskContent, TaskLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "../../searchQueryParamName";


const TaskList = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(searchQueryParamName);
  
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