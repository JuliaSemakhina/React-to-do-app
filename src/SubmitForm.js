import React, { useState} from 'react'
import { FaPlus } from "react-icons/fa";

const SubmitForm = ({ addTodo })=>{
const [newItem, setNewItem] = useState("");

const handleSubmit =(e)=>{
        e.preventDefault();
        if(newItem === "") return
        addTodo(newItem)
        setNewItem("")
      };
     
    return (
        <form className='task-row' onSubmit={handleSubmit}>
          <FaPlus className='plus-sign' />
          <input 
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
           type='text'
           placeholder="Create a new todo..."
           />
        <button className='add-btn'>Add
       </button>
      </form>
    )
}

export default SubmitForm



