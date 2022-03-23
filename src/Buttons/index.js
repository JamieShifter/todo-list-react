import { FilterButton, ButtonsArea } from "./styled.js";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <ButtonsArea>
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
    </ButtonsArea>
);

export default Buttons;