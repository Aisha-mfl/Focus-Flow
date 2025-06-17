const GOOGLE_API = 'AIzaSyCk1RD6edvLjsdifV-WvCPQ9yHx_voBSd4';
export const getMapPreview = (lat, lng) => {
  const imagePreviewurl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:C%7C${lat},${lng}&key=${GOOGLE_API}`;

  return imagePreviewurl;
};

export const getAddress = async (lat, lng) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API}`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error('Failed to fetch address');
  }
  const data = await response.json();
  const address = await data.results[0].formatted_address;
  
  return address;
};
