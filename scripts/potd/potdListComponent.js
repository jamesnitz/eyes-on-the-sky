import { usePotd, getPotd } from "./potdDataProvider.js";

const eventHub = document.querySelector(".container")
const content = document.querySelector(".popularPhoto");
let currentDate = "12-01-2019"
const potdListComponent = () => {
  const allpotd = usePotd()
  const renderPotd = () => {
    if (allpotd.media_type === "image") {
      content.innerHTML =
      `
      <div class="potd">
      <h3>Most Popular astronomy photo of the day</h3>
      <div>${allpotd.title}</div>
      <img class="potdpic" src="${allpotd.url}">
      <div>${allpotd.date}</div>
      <div>${allpotd.explanation}</div>
    </div>
    `
  } else if (allpotd.media_type === "video") {
    
    content.innerHTML +=
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
  renderPotd(currentDate)

  eventHub.addEventListener("broadcastPotd", event => {
    const potdDate = event.detail.date
    const newPotd = usePotd()
    getPotd(potdDate)
    .then(() => {
        renderPotd(newPotd)
      })
  })

}
export default potdListComponent