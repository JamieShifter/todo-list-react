import { ButtonsArea } from "./styled.js";
import { FilterButton } from "../styled.js";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, selectHideDone, toggleHideDone, setAllDone} from "../../tasksSlice.js";

const Buttons = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();
    return (
        <ButtonsArea>
            {tasks.length > 0 && (
                <>
                    <FilterButton
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </FilterButton>
                    <FilterButton
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}>
                        Ukończ wszystkie
                    </FilterButton>
                </>)}
        </ButtonsArea>
    )
};

export default Buttons;