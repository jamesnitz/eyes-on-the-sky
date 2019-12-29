let marsPhotosCollection = []
export const useMarsPhoto = () => {
    return marsPhotosCollection
}
// Fetch
export const getMarsPhotos = (rover, date) => {
    return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&api_key=adCtYxYVJtwnphsjnVwbx3GbbSf54V9HKlnED0Rw`)
        .then(response => response.json())
        .then(
            parsedMarsPhotosCuriosity => {
                parsedMarsPhotosCuriosity.photos.forEach(element => {
                    marsPhotosCollection.push(element)    
                })
            }
        )
}
