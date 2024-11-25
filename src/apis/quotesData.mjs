import axios from "axios";


//api provides cors issue -- must add proxy in .package-json, found a different api
// export async function getQuoteData() {
//     const apiUrl = 'https://zenquotes.io/api/today'

//     try {
//         const response = await axios.get(apiUrl)
//         console.log("API Response:", response.data); 
//         return response.data;
        
//     } catch (err) {
//         console.error("Fetching Error:", err);
        
//     }
// }

export async function getQuoteData() {
    const apiKey = import.meta.env.VITE_QUOTES_KEY
    const apiUrl ='https://api.api-ninjas.com/v1/quotes'

    try {
        const response = await axios.get(apiUrl, {
            headers: {
                'X-Api-Key': apiKey, //Add the API key in headers according to the documentation
            }
        });

        // Log and return the response data
        console.log("API Response:", response.data);
        return response.data;
        
    } catch (err) {
        console.error("Fetching Error:", err);
        
    }
}

