import { StyledTasks, TaskItem, TaskButton, TaskContent } from "./styled";

const TaskList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <StyledTasks>
        {tasks.map(task => (
            <TaskItem
                hidden={task.done && hideDone}
                key={task.id}>
                <TaskButton
                    done={task.done}
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✓" : ""}
                </TaskButton>
                <TaskContent done={task.done}>
                    {task.content}
                </TaskContent>
                <TaskButton trash
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </TaskButton>
            </TaskItem>
        ))}
    </StyledTasks>
);

export default TaskList;