const GIFY_API_URL =
  'https://api.giphy.com/v1/gifs/search?api_key=GIY6EJ9YL5trOrLi1fg3XFVLh1KYn0oG&limit=1&q='

export const getGif = async (fact) => {
  const firstTreeWords = fact.split(' ', 3).join(' ')
  const res = await fetch(`${GIFY_API_URL}${firstTreeWords}`)
  const json = await res.json()
  const { url } = json.data[0].images.original
  return url
}
