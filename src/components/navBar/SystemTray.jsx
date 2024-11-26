import React from 'react';
import '../../css/systemTray.css'
import { CurrentDate } from '../Time';
import GetWeatherData from '../../apis/weatherData.mjs';
import { useState, useEffect } from 'react';
import '../../../public/imgs/cuteFox.png'

export default function SystemTray() {
    const [weather, setWeather] = useState(null);
    const [loadWeather, setLoadWeather] = useState(true);
    const [errors, setErrors] =useState(null);

    useEffect(() => {
        const GetWeather = async () => {
            try {

                const weatherData = await GetWeatherData();
                setWeather(weatherData); 
                setLoadWeather(false); 
            } catch (err) {
                setErrors("Cannot Retrieve Data");
                setLoadWeather(false); 
            }
        };

        GetWeather();  
    }, []); 

    if (loadWeather){
        return<div>Loading...</div>
    }

    if(errors){
        return <div>{errors}</div>
    }

    function fahrenheitData(kelvin) {
        try {
            const fahrenheit = (kelvin - 273.15) * (9 / 5) + 32;
            return Math.ceil(fahrenheit); 
        } catch (err) {
            console.error(err)
    }
}

function fahrenheitData(kelvin) {
    try {
        const fahrenheit = (kelvin - 273.15) * (9 / 5) + 32;
        return Math.ceil(fahrenheit); 
    } catch (err) {
        console.error(err);
    }
}

function emojiWeather(temp, weatherId) {
    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return "🌩"; //Thunderstorm
        case (weatherId >= 300 && weatherId < 400):
            return "🌧"; //Light rain
        case (weatherId >= 500 && weatherId < 600):
            return "🌧"; //Heavy rain
        case (weatherId >= 600 && weatherId < 700):
            return "❄"; //Snow
        case (weatherId >= 700 && weatherId < 800):
            return "🌫"; //Atmosphere (fog)
        case (weatherId === 800):
            return "☀"; //Clear sky
        case (weatherId > 800 && weatherId < 810):
            return "☁"; //Cloudy
        default:
            return "👽"; //Default case for unknown weather
    }
}

    return (
        <div className='sysTray'>
            <div className='Text'>
                <h2 className='bookmarkHole'>●</h2>
                <h2 className='headerDate'><CurrentDate /></h2>
                <h4>Weather: </h4> 
            {weather && (
                    <div className='geoData'>
                        <p className='geoData'>{weather.name}</p> 
                        <p className='data'>Temperature: {fahrenheitData(weather.main.temp)}°F</p> 
                        <p className='data'>{weather.weather[0].description}</p> 
                        <p className="emoji">{emojiWeather(weather.main.temp, weather.weather[0].id)}</p>
                    </div>
                )}
            </div>
            <img src='../../../public/imgs/cuteFox.png' alt='fox image' />
        </div>
    )
}
