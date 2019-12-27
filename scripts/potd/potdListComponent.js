import { usePotd } from "./potdDataProvider.js";
const potdListComponent = () => {
  const content = document.querySelector(".popularPhoto");
  const allpotd = usePotd()
  if (allpotd.media_type === "image") {
    content.innerHTML +=
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
export default potdListComponent