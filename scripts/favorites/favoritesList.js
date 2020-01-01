import { saveFavorite, useFavorites } from "./favoritesProvider.js"

const eventHub = document.querySelector(".container")


export const favoritesList = () => {
 eventHub.addEventListener("favoriteSaved", event => {
   let newFavorites = []
   saveFavorite(event.detail)
   .then(() => newFavorites = useFavorites())
 }) 
}