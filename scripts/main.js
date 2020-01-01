import potdListComponent from "./potd/potdListComponent.js";
import marsPhotoListComponent from "./photos/marsPhotoListComponent.js";
import { searchButtonListener } from "./photos/searchButtonMars.js";
import { potdSearch } from "./potd/potdSearch.js";
import { favoritesComponent } from "./favorites/favoritesComponent.js";
import { favoritesList } from "./favorites/favoritesList.js";
import { getFavorites, useFavorites } from "./favorites/favoritesProvider.js";
import { renderFavorites  } from "./favorites/favoritesList.js";

getFavorites()
.then(() => {
  renderFavorites(useFavorites())
})
marsPhotoListComponent();
potdListComponent();
potdSearch();
searchButtonListener();
favoritesComponent();
favoritesList()