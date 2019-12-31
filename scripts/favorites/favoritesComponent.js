
const eventHub = document.querySelector(".container")
const content = document.querySelector(".favoriteContainer")

export const favoritesComponent = () => {
  eventHub.addEventListener("click", event => {
    if (event.target.classList.contains("favoriteButton")) {
      let dateValue = document.querySelector(".potdDisplayDate").innerHTML
      let imageValue = document.querySelector(".potdpic").src
      let titleValue = document.querySelector(".potdTitle").innerHTML
      
      const newFavorite = new CustomEvent("favoriteSaved", {
        detail: {
          // need to find a way to identify API source and add it source: sourceValue,
          title: titleValue,
          image: imageValue,
          date: dateValue
        }
      })
      eventHub.dispatchEvent(newFavorite)
    }
  })
}