import {API_KEY} from "../../config.js";

export const getPictureByDate = async (date) => {
    let url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;
    try {
        const response = await fetch(url);
        return response.json()
        
    }
    catch {
        throw new Error('Could not fetch data from the api')
    }
}