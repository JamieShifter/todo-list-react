import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Container from "./Container";
import Header from "./Header";
import "./index.css";

const tasks = [
  { id: 1, content: "Przejść na reacta", done: false },
  { id: 2, content: "Zjeść obiad", done: true }
];

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <main>
      <Header title="Lista zadań" />
      <Container
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Container
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />
        }
      />
    </main>
  );
}

export default App;
