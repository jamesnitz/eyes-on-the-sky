let favorites = []

export const useFavorites = () => {
  return favorites
}

export const getFavorites = () => {
  //requests the data from an API from the internet
  return fetch("http://localhost:3000/favorites")
  //When we get a response with a string, parse the string. YOU CAN ONLY SEND STRINGS OVER THE INTERNET
  .then(response => response.json())
  //Then do something with the data
  .then(
      parsedFavorites => {
         favorites =  parsedFavorites.slice()
      }
  )
}

export const saveFavorite = favorite => {
  return fetch ("http://localhost:3000/favorites", {
    method: "POST",
    headers: {
      "content-Type": "application/json"
    },
    body: JSON.stringify(favorite)
  })
  .then(getFavorites)
}

export const deleteFavorite = favoriteId => {
  return fetch(`http://localhost:3000/favorites/${favoriteId}`, {
    method: "DELETE"
  })
  .then(getFavorites)
}