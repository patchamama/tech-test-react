import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import ListMovies from './component/ListMovies'
import { getAPI } from './service/api'

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState()

  useEffect(() => {
    if (!search) return
    const timeOutID = setTimeout(() => {
      getAPI(search).then(({ Search: data }) => {
        console.log(data)
        setMovies(data || [])
      })
    }, 300)

    return () => clearTimeout(timeOutID)
  }, [search])

  const handleSubmit = (e) => {
    e.preventDefault()
    const query = e.target.search.value
    setSearch(query)
  }

  const handleInput = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <header>
        <h1>Buscador de películas </h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            onChange={handleInput}
            placeholder='Avengers, Matrix...'
            name='search'
            value={search}
          />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <ListMovies movies={movies} />
      </main>
    </>
  )
}

export default App
