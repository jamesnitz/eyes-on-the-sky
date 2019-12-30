import { refreshPhotos } from "./potdDataProvider.js";

const eventHub = document.querySelector(".container");

export const potdSearch = () => {
  eventHub.addEventListener("click", event => {
    if (event.target.classList.contains("potdButton")) {
      refreshPhotos()
      const dateValue = document.querySelector(".potdDate").value
      const potdBroadcast = new CustomEvent("broadcastPotd", {
        detail: {
          date: dateValue
        }
      })
      eventHub.dispatchEvent(potdBroadcast);
    }
  })
}