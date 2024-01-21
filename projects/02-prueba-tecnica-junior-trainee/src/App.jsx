import { useEffect, useState } from 'react'
import './App.css'
import { getGif } from './service/getGif'
import { useFact } from './hooks/useFact'

function App() {
  const [gifURL, setGifURL] = useState()
  const { fact, setFact, getFactRandom } = useFact()

  useEffect(() => {
    if (!fact) return
    getGif(fact).then((url) => setGifURL(url))
  }, [fact])

  const handleClick = () => {
    getFactRandom().then((fact) => setFact(fact))
  }

  return (
    <>
      <h1>Facts of cats</h1>
      <section>
        {fact && <p style={{ color: 'red' }}>{fact}</p>}
        {gifURL && <img src={gifURL} alt={`Image of ${fact}`} />}
      </section>
      <button onClick={handleClick}>Next</button>
    </>
  )
}

export default App
