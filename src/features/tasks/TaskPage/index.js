import Container from "../../../common/Container";
import Header from "../../../common/Header";
import "../../../index.css";
import { ThemeProvider } from "styled-components";
import { theme } from "../TasksPage/index.js"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <ThemeProvider theme={theme}>
            <Header title="Szczegóły zadania" />
            <Container
                title={task ? task.content : "Nie znaleziono zadania:("}
                body={task.done ? "Ukończono" : "Nie ukończono"}
            />
        </ThemeProvider>
    );
}

export default TaskPage;
