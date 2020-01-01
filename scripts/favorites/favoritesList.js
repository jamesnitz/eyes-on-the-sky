import { saveFavorite, useFavorites, deleteFavorite, } from "./favoritesProvider.js"
import { favoriteCardComponent } from "./favoriteCardComponent.js"

const eventHub = document.querySelector(".container")
const content = document.querySelector(".favorites")
export const renderFavorites = (array) => {
  content.innerHTML = `
  <h3>Favorite Photos</h3>
  <div class="favorite__container">
  ${
    array.map(
      (singleFavorite) => {
        return favoriteCardComponent(singleFavorite)
      }
    ).join(" ")
  }
  </div>
  `
}
export const favoritesList = () => {

  eventHub.addEventListener("favoriteSaved", event => {
   let newFavorites = []
   saveFavorite(event.detail)
   .then(() => {
     newFavorites = useFavorites()
     renderFavorites(newFavorites)
   })
 })

 eventHub.addEventListener("click", event => {
   if (event.target.id.startsWith("deleteNote--")) {
     const [prefix, id] = event.target.id.split("--")
     deleteFavorite(id).then(
       () => {
         const newestFavorite = useFavorites()
         renderFavorites(newestFavorite)
       }
     )
   }
 })

}