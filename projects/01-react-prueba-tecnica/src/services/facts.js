const FACTS_API = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  try {
    const response = await fetch(FACTS_API)
    if (!response.ok) {
      throw new Error(
        `Error fetching data: ${response.status} ${response.statusText}`
      )
    }
    const data = await response.json()
    const { fact } = data
    return fact
  } catch (error) {
    console.error(error)
    return null
    // Manejar el error
  }
}
