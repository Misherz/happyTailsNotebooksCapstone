import axios from "axios";


async function GetWeatherData() {

    if (!navigator.geolocation) {
        return console.error("Geolocation is not available.");

    }

    try {
        
        //Getting location
        const geoLocation = await new Promise((res, rej) => {
            navigator.geolocation.getCurrentPosition(res, rej);
        });
        
        //Using .coords
        const longitude = geoLocation.coords.longitude;
        const latitude = geoLocation.coords.latitude;

        //Api Keys & URL
        const apiKey = import.meta.env.VITE_WEATHER_KEY
        const apiUrl =
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
        const response = await axios.get(`${apiUrl}`)




        return response.data;

    } catch (err) {
        console.error("Fetching Error:", err);

    }
}

export default GetWeatherData;

