import Container from "../../../common/Container";
import Header from "../../../common/Header";
import "../../../index.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <>
            <Header title="Szczegóły zadania" />
            <Container
                title={task ? task.content : "Nie znaleziono zadania:("}
                body={task.done ? "Ukończono" : "Nie ukończono"}
            />
        </>
    );
}

export default TaskPage;
