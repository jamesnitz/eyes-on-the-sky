import { getMarsPhotos, getMarsPhotosOpportunity, getMarsPhotosSpirit } from "./photos/MarsPhotoDataProvider.js";
import marsPhotoListComponent from "./photos/marsPhotoListComponent.js";
import { getPotd } from "./potd/potdDataProvider.js";
import potdListComponent from "./potd/potdListComponent.js";
import dateListener from "./photos/searchButtonMars.js";

marsPhotoListComponent()

getPotd()
  .then(() => potdListComponent());

dateListener();