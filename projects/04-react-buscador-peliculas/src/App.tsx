import { useState } from 'react'
import './App.css'
import api from './mocks/results.json'

function App() {
  const [movies, setMovies] = useState(api.Search)
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const search = e.target.search.value
    console.log(search)
    setQuery(search)
  }

  const queryResult = query.length
    ? movies.filter((movie) =>
        movie.Title.toLowerCase().includes(query.toLowerCase())
      )
    : movies

  console.log({ query, queryResult })

  return (
    <main>
      <h1>Buscador de películas</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder='Avengers, matrix, ...' name='search' />
        <button type='submit'>Buscar</button>
      </form>

      <section className='movies'>
        {queryResult.map((movie) => (
          <div key={movie.imdbID} className='movie'>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={`Image of film ${movie.Title}`} />
          </div>
        ))}
      </section>
    </main>
  )
}

export default App
