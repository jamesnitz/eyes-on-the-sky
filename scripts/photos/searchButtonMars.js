const eventHub = document.querySelector(".container") 

export const searchButtonListener = () => {
  eventHub.addEventListener("click", event => {
    if (event.target.classList.contains("searchButton")){
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