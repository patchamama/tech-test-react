import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

export const TodoList = ({ todos, setTodos }) => {
  const [editTodoVal, setEditTodoVal] = useState(null)
  const [editTodoText, setEditTodoText] = useState('')
  const inputEdit = useRef(null)

  useEffect(() => {
    if (editTodoVal !== null) {
      inputEdit.current.focus()
    }
  }, [editTodoVal])

  const ShowListItem = ({ todo }) => {
    return (
      <li onDoubleClick={() => editTodo(todo.id)}>
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
    )
  }
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
    setEditTodoVal(id)

    // const newTodos = todos.map((todo) =>
    //   todo.id === id ? { ...todo, text: prompt('Nuevo texto') } : todo
    // )
    // setTodos(newTodos)
  }

  ShowListItem.propTypes = {
    todo: PropTypes.object.isRequired
  }

  const handleEditTodo = (e) => {
    setEditTodoText(e.target.value)
    if (e.key === 'Enter' && e.target.value.length > 0) {
      const newTodos = todos.map((todo) =>
        todo.id === editTodoVal ? { ...todo, text: e.target.value } : todo
      )
      setTodos(newTodos)
      setEditTodoVal(null)
      setEditTodoText('')
    } else if (e.key === 'Escape') {
      setEditTodoVal(null)
      setEditTodoText('')
    }
  }

  return (
    <ul>
      {todos.length > 0 ? '' : <p>No hay todos</p>}
      {todos.map((todo) =>
        // eslint-disable-next-line multiline-ternary
        editTodoVal !== todo.id ? (
          <ShowListItem key={todo.id} todo={todo} />
        ) : (
          <input
            ref={inputEdit}
            key={todo.id}
            value={editTodoText}
            onChange={(e) => handleEditTodo(e)}
            onKeyDown={(e) => handleEditTodo(e)}
          />
        )
      )}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired
}

export default TodoList
