// import marsPhotoListComponent from "./photos/marsPhotoListComponent.js";
import { getPotd } from "./potd/potdDataProvider.js";
import potdListComponent from "./potd/potdListComponent.js";
import { searchButtonListener } from "./photos/searchButtonMars.js";
import marsPhotoListComponent from "./photos/marsPhotoListComponent.js";

marsPhotoListComponent()

getPotd()
  .then(() => potdListComponent());

searchButtonListener();