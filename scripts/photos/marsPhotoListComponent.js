import marsPhotoComponent from "./MarsPhoto.js";
import { getMarsPhotos, useMarsPhoto } from "./MarsPhotoDataProvider.js";
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
    let roverSelected = e.detail.rover
    let currentDatePhotos = useMarsPhoto()

    getMarsPhotos(roverSelected, earthDate)
    .then(() => {
      if (currentDatePhotos.length > 0) {
        render(currentDatePhotos)
      } else {
        content.innerHTML = `<div>NO PHOTOS NO PHOTOS NO PHOTOS</div>`
      }
    })
  })   
 }


export default marsPhotoListComponent;