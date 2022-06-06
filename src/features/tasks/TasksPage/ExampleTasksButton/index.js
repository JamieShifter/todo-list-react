import { FilterButton } from "../styled"
import { useDispatch, useSelector } from "react-redux"
import { fetchExampleTasks, selectFetchingStatus} from "../../tasksSlice"

export const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const fetchingStatus = useSelector(selectFetchingStatus);

    return (
        <FilterButton onClick={() => dispatch(fetchExampleTasks())} disabled={fetchingStatus}>
            {fetchingStatus ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </FilterButton>
    )
}