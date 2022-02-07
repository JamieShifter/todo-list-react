import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
    <div className="form__buttons">
        {tasks.length > 0 && (
            <>
                <button
                    onClick={toggleHideDone}
                    className="form__button"
                >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="form__button"
                    disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </>)}
    </div>
);

export default Buttons;