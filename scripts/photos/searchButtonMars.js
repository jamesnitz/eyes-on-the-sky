import { refreshPhotos } from "./MarsPhotoDataProvider.js"

const eventHub = document.querySelector(".container")

export const searchButtonListener = () => {
  eventHub.addEventListener("click", event => {
    if (event.target.classList.contains("searchButton")) {
      refreshPhotos()
      const roverValue = document.querySelector(".roverSearch").value
      const dateValue = document.querySelector(".specificDate").value
      const broadcast = new CustomEvent("broadcastDate", {
        detail: {
          date: dateValue,
          rover: roverValue
        }
      })
      eventHub.dispatchEvent(broadcast);
    }
  })
}

export default searchButtonListener