import { getMarsPhotos, getMarsPhotosOpportunity, getMarsPhotosSpirit } from "./MarsPhotoDataProvider.js"
import marsPhotoListComponent from "./marsPhotoListComponent.js"


const eventHub = document.querySelector(".container") 

export const dateListener = () => {
  eventHub.addEventListener("change", event => {
    if (event.target.classList.contains("specificDate")){
      const dateValue = event.target.value
      const broadcast = new CustomEvent("broadcastDate", {
        detail: {
          date: dateValue

        }
      })  
      
      
      eventHub.dispatchEvent(broadcast);  
    }
    })
  }
  export default dateListener