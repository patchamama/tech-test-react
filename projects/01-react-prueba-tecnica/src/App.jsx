import React from 'react'
import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { imgRandom } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Fact of cats</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imgRandom && (
          <img
            src={`https://cataas.com/cat/${imgRandom}`}
            alt={`Image of ${fact}`}
          />
        )}
      </section>
      <button onClick={handleClick}>Siguiente</button>
    </main>
  )
}
