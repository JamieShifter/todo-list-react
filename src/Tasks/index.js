import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="taskList">
        {tasks.map(task => (
            <li className={`taskList__item${(task.done && hideDoneTasks) ? " taskList__item--hidden" : ""}`} key={task.id}>
                <button className={`taskList__button${task.done ? " taskList__button--done" : ""}`}>
                    {task.done ? "✓" : ""}
                </button>
                <span className={`taskList__text${task.done ? " taskList__text--done" : ""}`}>
                    {task.content}</span>
                <button className="taskList__button taskList__button--trash">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;