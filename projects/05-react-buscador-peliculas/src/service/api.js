const API_URL = 'https://www.omdbapi.com/?apikey=6f10228e&s='

export const getAPI = async (query) => {
  try {
    const resp = await fetch(`${API_URL}${query}`)
    if (!resp.ok) throw new Error('Error with the fetching...')
    const json = resp.json()
    return json
  } catch (e) {
    console.error(e)
  }
}
