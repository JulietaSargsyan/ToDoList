import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert("Please add task text")
            return
        }
        onAdd({text, date})

        setText('');
        setDate('');
    }

  return (
    <form className="inputBlock" onSubmit={onSubmit}>
        <label>Task</label>
        <input 
          type='text' 
          placeholder="Add new item"
          value={text}
          onChange={(e) => setText(e.target.value)}
        /> 
        <label>Date</label>
        <input 
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input className='submitButton' type='submit' value='Add Task'/>
      </form>
  )
}

export default AddTask