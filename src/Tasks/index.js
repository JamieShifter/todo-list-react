import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="taskList">
        {tasks.map(task => (
            <li className={`taskList__item${(task.done && hideDone) ? " taskList__item--hidden" : ""}`} key={task.id}>
                <button
                    onClick={() => toggleTaskDone(task.id)}
                    className={`taskList__button${task.done ? " taskList__button--done" : ""}`}
                >
                    {task.done ? "✓" : ""}
                </button>
                <span className={`taskList__text${task.done ? " taskList__text--done" : ""}`}>
                    {task.content}</span>
                <button
                    onClick={() => removeTask(task.id)}
                    className="taskList__button taskList__button--trash"
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;