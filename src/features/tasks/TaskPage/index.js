import Container from "../../../common/Container";
import Header from "../../../common/Header";
import "../../../index.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { GeneralContainer, SuperContainer } from "../TasksPage/styled";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <SuperContainer>
            <GeneralContainer>
                <Header title="Szczegóły zadania" />
                <Container
                    title={task ? task.content : "Nie znaleziono zadania:("}
                    body={task.done ? "Ukończono" : "Nie ukończono"}
                />
            </GeneralContainer>
        </SuperContainer>
    );
}

export default TaskPage;
