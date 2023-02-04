import {FaTrash} from 'react-icons/fa';
import {FaEdit} from 'react-icons/fa';

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
        <div>
          <h3> {task.text}</h3>
          <p>{task.date}</p>
        </div>
        <div>
          {/* <FaEdit className='edit-icon'/> */}
          <FaTrash className='trash-icon' onClick={onDelete}/>
        </div>
    </div>
  )
}

export default Task