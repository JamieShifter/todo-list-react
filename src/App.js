import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Container from "./Container";
import "./index.css";

const tasks = [
  { id: 1, content: "Przejść na reacta", done: false },
  { id: 2, content: "Zjeść obiad", done: true }
];

const hideDoneTasks = false;

function App() {
  return (
    <main>
      <header className="header">
        <h1 className="header__text">Lista zadań</h1>
      </header>
      <Container
      title="Dodaj nowe zadanie"
      body={<Form/>}
      />
      <Container 
      title="Lista zadań" 
      body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />} 
      extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
      } />
    </main>
  );
}

export default App;
