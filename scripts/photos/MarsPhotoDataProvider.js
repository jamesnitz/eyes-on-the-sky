let marsPhotosCollection = []
export const useMarsPhoto = () => {
    return marsPhotosCollection
}
// Curiosity Fetch
export const getMarsPhotos = (date) => {
    return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=adCtYxYVJtwnphsjnVwbx3GbbSf54V9HKlnED0Rw`)
        .then(response => response.json())
        .then(
            parsedMarsPhotosCuriosity => {
                parsedMarsPhotosCuriosity.photos.forEach(element => {
                    marsPhotosCollection.push(element)    
                })
            }
        )
}
//Opportunity Fetch
export const getMarsPhotosOpportunity = (date) => {
    return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=${date}&api_key=adCtYxYVJtwnphsjnVwbx3GbbSf54V9HKlnED0Rw`)
        .then(response => response.json())
        .then(
            parsedMarsPhotosOpportunity => {
                parsedMarsPhotosOpportunity.photos.forEach(element => {
                    marsPhotosCollection.push(element)
                    
                })
            }
        )
}
// Spirit Fetch
export const getMarsPhotosSpirit = (date) => {
    return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=${date}&api_key=adCtYxYVJtwnphsjnVwbx3GbbSf54V9HKlnED0Rw`)
        .then(response => response.json())
        .then(
            parsedMarsPhotosSpirit => {
                parsedMarsPhotosSpirit.photos.forEach(element => {
                    marsPhotosCollection.push(element)
                    
                })
            }
        )
}
