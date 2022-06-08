import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import "../../../index.css";
import { Search } from "./Search";
import { ExampleTasksButton } from "./ExampleTasksButton";

function TasksPage() {

  return (
   <>
      <Header title="Lista zadań" />
      <Container
        title={"Dodaj nowe zadanie"}
        body={<Form />}
        extraHeaderContent={<ExampleTasksButton/>}
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
    </>
  );
}

export default TasksPage;
