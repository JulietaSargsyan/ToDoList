import { useState, useEffect } from "react";
import Header from "./components/Header";  
import {FaPlus} from 'react-icons/fa';
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";

function App() {
  const [ tasks, setTasks ] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

//Fetch tasks from server
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }

//Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task)
    })

    const data = await res.json();

    setTasks([...tasks, data])
  }

//Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="App">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/>: 
        <h2 className="noTasksText">There is no tasks to show!!!</h2>}
    </div>
  );
}

export default App;
