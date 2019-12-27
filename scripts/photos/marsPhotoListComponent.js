import { useMarsPhoto, getMarsPhotos, getMarsPhotosOpportunity, getMarsPhotosSpirit } from "./MarsPhotoDataProvider.js";
import marsPhotoComponent from "./MarsPhoto.js";
const eventHub = document.querySelector(".container");
const content = document.querySelector(".marsPhotoContainer");


const marsPhotoListComponent = () => {
  
  let render = allMarsPhotos => {
    content.innerHTML =
    ` 
    <h3>Mars Rover Photos</h3>
    <div class="Mars">
    ${
      allMarsPhotos.map(
        (singleMarsPhoto) => {
          return marsPhotoComponent(singleMarsPhoto)
        }
        ).join(" ")
      }
      </div>
      `
    }

  eventHub.addEventListener("broadcastDate", e => {

    let earthDate = e.detail.date
    let currentDatePhotos = useMarsPhoto()
    console.log(currentDatePhotos)
    getMarsPhotos(earthDate)
    .then(() => getMarsPhotosOpportunity(earthDate))
    .then(() => getMarsPhotosSpirit(earthDate))
    .then(() => {
          if (currentDatePhotos.length > 0) {
            render(currentDatePhotos)
          } else {
            alert("NO PHOTOS")
          }
        })
  })   
}


export default marsPhotoListComponent;