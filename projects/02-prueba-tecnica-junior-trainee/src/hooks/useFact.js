import { useState, useEffect } from 'react'

export const useFact = () => {
  const [fact, setFact] = useState('')

  const FACT_API_URL = 'https://catfact.ninja/fact'

  const getFactRandom = async () => {
    const res = await fetch(FACT_API_URL)
    const json = await res.json()

    const { fact } = json
    return fact
  }

  useEffect(() => {
    getFactRandom().then((fact) => setFact(fact))
  }, [])

  return { fact, setFact, getFactRandom }
}

export default useFact
