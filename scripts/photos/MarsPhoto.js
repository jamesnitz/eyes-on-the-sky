const marsPhotoComponent = (marsPhoto) => {
  return ` 
          <div class="mars__photocard">    
            <div>Name: ${marsPhoto.rover.name}</div>
            <img class="marsphotos" src="${marsPhoto.img_src}">
            <div class="marsphotos"> Earth Date: ${marsPhoto.earth_date}"</div>
            <div> Camera Name: ${marsPhoto.camera.full_name}"</div>
          </div>
        `
}
export default marsPhotoComponent;
