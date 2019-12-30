let potdCollection = []

export const usePotd = () => potdCollection

export const getPotd = (date) => {
  return fetch(`https://api.nasa.gov/planetary/apod?api_key=u4jg3CAtIXPD2D5KsWNv5Fh2Dix2hRdTkQizG3TF&date=${date}`)
  .then(response => response.json())
  .then(
      potd => {
        potdCollection = potd
      }
  )
}

export const refreshPhotos = () => {
  potdCollection = []
}