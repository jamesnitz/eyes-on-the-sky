export const favoriteCardComponent = (favorite) => {
  return `
    <div class= "favorite">
      <div class="favorite__title">Name: ${favorite.title}</div>
      <img class="favorite__pic" src="${favorite.image}"><br>
      <button id="deleteNote--${favorite.id}">Delete</button>
    </div>
  `
}