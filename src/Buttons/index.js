import { FilterButton } from "./styled.js";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <div className="form__buttons">
        {tasks.length > 0 && (
            <>
                <FilterButton
                    onClick={toggleHideDone}
                >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </FilterButton>
                <FilterButton
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </FilterButton>
            </>)}
    </div>
);

export default Buttons;