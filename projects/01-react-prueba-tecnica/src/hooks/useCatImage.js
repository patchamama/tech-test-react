import { useEffect, useState } from 'react'
import { getCatId } from '../services/cats'

export const useCatImage = ({ fact }) => {
  const [imgRandom, setImgRandom] = useState()

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')

    getCatId(threeFirstWords).then((idVal) => {
      console.log(idVal)
      setImgRandom(idVal)
    })
    // console.log(idVal)

    // fetch(`${IMAGE_RANDOM_API}${threeFirstWords}?size=50&color=red&json=true`)
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error('Error with fetch')
    //     }
    //     return res.json()
    //   })
    //   .then((response) => {
    //     console.log(response)
    //     const { _id } = response
    //     setImgRandom(_id)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  }, [fact])

  return { imgRandom }
}
