apiUrl = 'https://picsum.photos/v2/list'

export async function getPhotoData() {
    
    try {
        const response = await axios.get(`${url}`)

        return (response.data)
        
    } catch (err) {
        console.error("Fetching Error:", err);
        
    }
}