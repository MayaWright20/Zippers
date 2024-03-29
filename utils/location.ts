import { GOOGLE_API_KEY} from "@env";

export async function getAddress(lat, long){
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${GOOGLE_API_KEY}`; 
    const response = await fetch(url);

    if( !response.ok ){
        throw new Error('Failed to fetch address')
    }

    const data = await response.json();
    const address = data.results[0].address_components[2].long_name;
    return address;
}