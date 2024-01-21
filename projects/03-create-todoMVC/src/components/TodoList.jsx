import React from 'react'

import PropTypes from 'prop-types'

export const TodoList = ({ todos, setTodos }) => {
  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const toggleCompleted = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(newTodos)
  }

  const editTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: prompt('Nuevo texto') } : todo
    )
    setTodos(newTodos)
  }

  return (
    <ul>
      {todos.length > 0 ? '' : <p>No hay todos</p>}
      {todos.map((todo) => (
        <li key={todo.id} onDoubleClick={editTodo}>
          <input
            type='checkbox'
            onChange={() => toggleCompleted(todo.id)}
            checked={todo.completed}
          />
          <span>{todo.text}</span>
          <button
            onClick={() => removeTodo(todo.id)}
            style={{ marginLeft: '15px' }}
          >
            Borrar
          </button>
        </li>
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired
}

export default TodoList
