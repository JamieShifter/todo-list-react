import Form from "./Form"

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
          <div className="form__buttons"></div>
        </div>
        <div className="form__container form__container--tasks">
          <ul className="taskList">
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
