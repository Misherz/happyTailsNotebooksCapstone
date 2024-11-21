import axios from "axios";

export async function getQuoteData() {
    const apiUrl = 'https://zenquotes.io/api/today'

    try {
        const response = await axios.get(apiUrl)

        return response.data;
        
    } catch (err) {
        console.error("Fetching Error:", err);
        
    }
}