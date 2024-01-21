import React, { useState } from 'react'
import './App.css'
import { TodoList } from './components/TodoList'

const mockTodos = [
  { id: '1', text: 'Aprender React', completed: false },
  { id: '2', text: 'Aprender TypeScript', completed: true },
  { id: '3', text: 'Aprender Vite', completed: false }
]

function App() {
  const [todos, setTodos] = useState(mockTodos)
  const [filter, setFilter] = useState('')
  const [onlyPending, setOnlyPending] = useState(false)
  const [newTodo, setNewTodo] = useState('')

  const handleFilter = (e) => {
    setFilter(e.target.value.toLowerCase())
  }

  const handlePending = () => {
    setFilter('')
    setOnlyPending(!onlyPending)
  }

  const handleInput = (e) => {
    setNewTodo(e.target.value)
  }
  const removeCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const handleCrearTodo = () => {
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }])
    setNewTodo('')
  }

  const todosAfterPendingCheck = onlyPending
    ? todos.filter((todo) => !todo.completed)
    : todos
  const todosFilter =
    filter.length > 0
      ? todosAfterPendingCheck.filter((todo) =>
          todo.text.toLowerCase().includes(filter)
        )
      : todosAfterPendingCheck

  return (
    <>
      <header>
        <h1>todoMVC</h1>
        <input
          type='text'
          placeholder='Enter new todo text'
          onChange={handleInput}
          value={newTodo}
        />
        <button onClick={handleCrearTodo}>Crear Todo</button>
      </header>
      <main>
        <TodoList todos={todosFilter} setTodos={setTodos} />
      </main>
      <footer>
        <hr />
        <input
          placeholder='Enter filter'
          type='text'
          onChange={handleFilter}
          value={filter}
        />
        <button onClick={handlePending}>
          {onlyPending ? 'Show All' : 'Show Pendings'}
        </button>
        <button onClick={removeCompleted}>Borrar completados</button>
      </footer>
    </>
  )
}

export default App
