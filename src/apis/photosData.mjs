import axios from "axios";

export async function getPhotoData() {
    const apiUrl = 'https://picsum.photos/v2/list'

    try {
        const response = await axios.get(`${apiUrl}`)

        return response.data;
        
    } catch (err) {
        console.error("Fetching Error:", err);
        
    }
}