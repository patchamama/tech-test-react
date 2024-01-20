const IMAGE_RANDOM_API = 'https://cataas.com/cat/says/'

export const getCatId = async (threeFirstWords) => {
  //   fetch(`${IMAGE_RANDOM_API}${threeFirstWords}?size=50&color=red&json=true`)
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error('Error with fetch')
  //       }
  //       return res.json()
  //     })
  //     .then((response) => {
  //       console.log(response)
  //       const { _id } = response
  //       return _id
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       return null
  //     })

  try {
    const res = await fetch(
      `${IMAGE_RANDOM_API}${threeFirstWords}?size=50&color=red&json=true`
    )
    if (!res.ok) throw new Error('Error with fetch')
    const json = await res.json()
    const { _id } = json
    return _id
  } catch (error) {
    console.error(error)
    return null
    // Manejar el error
  }
}
