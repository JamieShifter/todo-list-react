import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    tasks.length > 0 && (
        <div className="form__buttons">
            <button className="form__button">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone</button>
            <button
                className="form__button"
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </button>
        </div>
));

export default Buttons;