// import marsPhotoListComponent from "./photos/marsPhotoListComponent.js";
import { getPotd } from "./potd/potdDataProvider.js";
import potdListComponent from "./potd/potdListComponent.js";
import marsPhotoListComponent from "./photos/marsPhotoListComponent.js";
import { searchButtonListener } from "./photos/searchButtonMars.js";
import { potdSearch } from "./potd/potdSearch.js";
import { favoritesComponent } from "./favorites/favoritesComponent.js";
import { favoritesList } from "./favorites/favoritesList.js";

marsPhotoListComponent();
potdListComponent();
potdSearch();
searchButtonListener();
favoritesComponent();
favoritesList()