import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import "../../../index.css";
import { ThemeProvider } from "styled-components";
import { Search } from "./Search";

export const theme = {
  colors: {
    primaryColor: "teal",
    textColor: "rgb(26, 26, 26)",
    backgroundColor: "rgb(255, 255, 255)"
  },
  breakpoints: {
    mobile: 767
  }
}

function TasksPage() {

  return (
    <ThemeProvider theme={theme}>
      <Header title="Lista zadań" />
      <Container
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Container
        title="Wyszukaj zadanie"
        body={<Search />}
      />

      <Container
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </ThemeProvider>
  );
}

export default TasksPage;