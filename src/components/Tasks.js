import { useState } from "react"

const Tasks = () => {
    const [ tasks, setTasks ] = useState([
        {
            id: 1,
            text: 'Write your first task above',
            date: '05.02.2023',
            isComplite: true
        }
    ])
  return (
    <>
      {tasks.map((task) =>(<h3 key={task.id}>{task.text}</h3>))}
    </>
  )
}

export default Tasks