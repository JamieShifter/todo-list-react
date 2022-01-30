import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";

const tasks = [
  {id: 1, content: "Przejść na reacta", done: false},
  {id: 2, content: "Zjeść obiad", done: true}
];

const hideDoneTasks = false;

function App() {
  return (
    <main>
      <header className="header">
        <h1 className="header__text">Lista zadań</h1>
      </header>
      <div className="container">
        <Form/>
      </div>
      <div className="container">
        <div className="form__container form__container--withButtons">
          <span className="form__title">Lista zadań</span>
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks}/>
        </div>
        <div className="form__container form__container--tasks">
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks}/>
        </div>
      </div>
    </main>
  );
}

export default App;
