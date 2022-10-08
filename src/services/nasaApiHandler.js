const APIKEY = "REPLACE THIS TEXT WITH YOUR NASA API KEY";

export const getPictureByDate = async (date) => {
    let url = `https://api.nasa.gov/planetary/apod?api_key=${APIKEY}&date=${date}`;
    try {
        const response = await fetch(url);
        return response.json()
        
    }
    catch {
        throw new Error('Could not fetch data from the api')
    }
}