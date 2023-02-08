import Task from "./Task"

const Tasks = ({tasks, onDelete}) => {
  return (
    <div className="tasks">
      {tasks.map((task, index) =>(
        <Task key={index} task={task} onDelete={() => onDelete(task.id )} />
      ))}
    </div>
  )
}

export default Tasks