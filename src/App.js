import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Container from "./Container";
import Header from "./Header";
import "./index.css";


function App() {
  const taskList = [
    { id: 1, content: "Przejść na reacta", done: false },
    { id: 2, content: "Zjeść obiad", done: true }
  ]

  const [tasks, setTasks] = useState(localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : taskList)

  const saveTasksToLocalStorage = () => {localStorage.setItem("tasks", JSON.stringify(tasks));}
  saveTasksToLocalStorage();
  

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
    saveTasksToLocalStorage();
  }

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      }

      return task;
    }))
    saveTasksToLocalStorage();
  }

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true
    })))
    saveTasksToLocalStorage();
  }

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1
      }
    ])
    saveTasksToLocalStorage();
  }

  return (
    <main>
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
    </main>
  );
}

export default App;
