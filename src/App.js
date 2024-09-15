import React, { useState, useEffect } from 'react'
import SubmitForm from './SubmitForm';
import List from './List';
import "./index.css";

const getLocalStorage = () => {
  let todos = localStorage.getItem('todos');
  if (todos == null) return []
  return JSON.parse(todos)
}

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {
  const [todos, setTodos] = useState(getLocalStorage());
  const [filter, setFilter] = useState('All');
  const [theme, setTheme] = useState(getStorageTheme());

  //Local Storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  //Adding new Item
  const addTodo = (title) => {
    const newTodo = { id: crypto.randomUUID(), title, completed: false };
    setTodos([...todos, newTodo]);
  };

  //Checking Item
  const toggleTodo = (id, completed) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) return { ...todo, completed }
      return todo
    })
    )
  };

  //Deleting Item
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  //Clearing the List
  const clearList = () => {
    setTodos([])
  }

  const filteredTasks = todos.filter((todo) => {
    if (filter === 'All') {
      return true;
    } else if (filter === 'Active') {
      return !todo.completed;
    } else if (filter === 'Completed') {
      return todo.completed;
    } else {
      return null
    }
  });

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const todos_completed = filteredTasks.filter(
    (todo) => todo.completed === false
  ).length;

  return (
    <div className='container'>
      <div className="container-box">
        <div className="header">
          <h2>Todo App</h2>
          <label className="switch-btn" id="theme" >
            <input type='checkbox' onClick={toggleTheme} />
            <svg
              className='sun-btn'
              aria-hidden="true"
              viewBox="0 0 15 11"
              fill="none"
            >
            </svg>
          </label>
        </div>

        <div className='todo-app' id='todo'>
          <SubmitForm addTodo={addTodo} />
          <List todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            filteredTasks={filteredTasks}
          />

          {todos.length > 0 &&
            <div className='buttons-container'>
              <p><span className="todo-number">{todos_completed} {`${todos_completed > 1 ? "items" : "item"}`}</span> left</p>
              <div className="buttons choices">
                <a className='filter-btn' onClick={() => setFilter('All')}>All</a>
                <a className='filter-btn' onClick={() => setFilter('Active')}>Active</a>
                <a className='filter-btn' onClick={() => setFilter('Completed')}>Completed</a>
              </div>
              <a className='filter-btn' id='delete' onClick={clearList}>Clear Items</a>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App
