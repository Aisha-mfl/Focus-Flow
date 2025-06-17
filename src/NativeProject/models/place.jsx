export const Place = (title, imageUri, location , ids) => {
    const address = location.address;
    const coordinates = { lat: location.lat, lng: location.lng };

    console.log('IDs: ',ids);
    

    const id = ids ?? Date.now();
    
    return {
        title,
        imageUri,
        address,
        location: coordinates,
        id
    };
};