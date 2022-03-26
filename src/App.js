import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Container from "./Container";
import Header from "./Header";
import { useTasks } from "./useTasks";
import "./index.css";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryColor: "teal",
    textColor: "rgb(26, 26, 26)",
    backgroundColor: "rgb(255, 255, 255)"
  },
  breakpoints: {
    mobile: 767
  }
}

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const {
    tasks,
    addNewTask,
    removeTask,
    setAllDone,
    toggleTaskDone
  } = useTasks();

  return (
    <ThemeProvider theme={theme}>
      <Header title="Lista zadań" />
      <Container
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Container
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </ThemeProvider>
  );
}

export default App;
