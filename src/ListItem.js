import React from 'react'

const ListItem = ({ completed, title, id, toggleTodo, deleteTodo }) => {

  return (
    <li className='list-item'>
      <label>
        <input
          type='checkbox'
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <svg
          className={`checkbox ${completed ? "checkbox--active" : ""}`}
          aria-hidden="true"
          viewBox="0 0 15 11"
          fill="none"
        >
          <path
            d="M1 4.5L5 9L14 1"
            strokeWidth="2"
            stroke={completed ? "#fff" : "none"}
          />
        </svg>
        <p>{title}</p>
      </label>

      <button
        onClick={() => deleteTodo(id)}
        className='btn'>delete</button>
    </li>
  )
}

export default ListItem;