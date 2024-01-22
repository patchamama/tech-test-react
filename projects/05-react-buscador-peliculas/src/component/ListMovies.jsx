import React from 'react'
import PropTypes from 'prop-types'

const ListMovies = ({ movies }) => {
  return (
    <ul className='movies'>
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={`Image of ${movie.Title}`} />
        </li>
      ))}
    </ul>
  )
}

ListMovies.propTypes = {
  movies: PropTypes.array.isRequired
}

export default ListMovies
