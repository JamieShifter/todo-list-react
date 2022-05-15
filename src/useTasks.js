import { useState, useEffect } from "react";

export const useTasks = () => {
    const taskList = [
      { id: 1, content: "Dodać nowe zadanie", done: false },
      { id: 2, content: "Zjeść obiad", done: true }
    ]

    const taskItem = localStorage.getItem("tasks");
  
    const [tasks, setTasks] = useState(taskItem ? JSON.parse(taskItem) : taskList)
  
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks)); 
    }, [tasks])
  

    // DEPRECATED
    
    const removeTask = (id) => {
      setTasks(tasks => tasks.filter(task => task.id !== id));
    }
  
    const toggleTaskDone = (id) => {
      setTasks(tasks => tasks.map(task => {
        if (task.id === id) {
          return { ...task, done: !task.done }
        }
  
        return task;
      }))
    }
  
    const setAllDone = () => {
      setTasks(tasks => tasks.map(task => ({
        ...task,
        done: true
      })))
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
    }

    return {tasks, addNewTask, removeTask, setAllDone, toggleTaskDone}
  }