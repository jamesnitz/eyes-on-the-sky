import { usePotd, getPotd } from "./potdDataProvider.js";

const eventHub = document.querySelector(".container")
const content = document.querySelector(".popularPhoto");

const potdListComponent = () => {
   const renderPotd = (allpotd) => {
    if (allpotd.media_type === "image") {
      content.innerHTML =
        `
      <div class="potd">
      <h3>Most Popular astronomy photo of the day</h3>
      <div class="potdTitle">${allpotd.title}</div>
      <img class="potdpic" src="${allpotd.url}">
      <div class="potdDisplayDate">${allpotd.date}</div>
      <div>${allpotd.explanation}</div>
      <button class="favoriteButton">Favorite</button>
      </div>
    `
    } else if (allpotd.media_type === "video") {

      content.innerHTML =
        `
    <div class="potd">
    <h3>Most Popular astronomy photo of the day</h3>
    <div>${allpotd.title}</div>
    <iframe src="${allpotd.url}" height="200" width="300"></iframe>
    <div>${allpotd.date}</div>
    <div>${allpotd.explanation}</div>
    </div>
    `
    }
  }
  
  const date = new Date();
  const currentDate = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) +
    '-' + date.getDate().toString().padStart(2, 0);

  //needs to be passed curent date
  getPotd(currentDate)
    .then(() => {
      const allpotd = usePotd()
      renderPotd(allpotd)
    })



  eventHub.addEventListener("broadcastPotd", event => {
    const potdDate = event.detail.date
    getPotd(potdDate)
      .then(() => {
        const newPotd = usePotd()
        renderPotd(newPotd)
      })
  })

}
export default potdListComponent