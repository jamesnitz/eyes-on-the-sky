// import marsPhotoListComponent from "./photos/marsPhotoListComponent.js";
import { getPotd } from "./potd/potdDataProvider.js";
import potdListComponent from "./potd/potdListComponent.js";
import marsPhotoListComponent from "./photos/marsPhotoListComponent.js";
import { searchButtonListener } from "./photos/searchButtonMars.js";
import { potdSearch } from "./potd/potdSearch.js";

marsPhotoListComponent()
potdListComponent()
potdSearch()
searchButtonListener();