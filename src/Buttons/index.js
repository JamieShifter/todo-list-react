import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="form__buttons">
    {tasks.length > 0 && (
        <>
        <button className="form__button">
            {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone</button>
        <button
            className="form__button"
            disabled={tasks.every(({ done }) => done)}>
            Ukończ wszystkie
        </button>
        </>)}
    </div>
);

export default Buttons;