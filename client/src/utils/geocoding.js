  export async function geocodeAddress(address, apiKey) {
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
  
    const response = await fetch(geocodeUrl);
    const data = await response.json();
  
    if (data.status === 'OK') {
      const placeId = data.results[0].place_id;
      return placeId;
    } else {
      throw new Error('Geocoding failed: ' + data.status);
    }
  }
  
  export function createMapEmbedUrl(placeId, apiKey) {
    return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=place_id:${placeId}`;
  }
  
  
  