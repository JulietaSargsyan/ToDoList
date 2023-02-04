import Header from "./components/Header";  
import {FaPlus} from 'react-icons/fa';
import Tasks from './components/Tasks';
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [ tasks, setTasks ] = useState([])

//Add Task
  const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1;
      const newTask = {id, ...task};
      console.log(newTask)
      setTasks([...tasks, newTask])
  }

//Delete Task
  const deleteTask = (id) => {
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
