import React from 'react'
import ListItem from './ListItem'

const List = ({ todos, toggleTodo, deleteTodo, filteredTasks }) => {

  return (
    <ul className='list-container'>
      {todos.length === 0 && <div className='no-items'><p>No Todos to complete</p></div>}
      {filteredTasks.map((todo) => {
        return (
          <ListItem {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}

export default List
