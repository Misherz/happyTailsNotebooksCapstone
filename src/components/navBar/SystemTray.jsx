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


    return (
        <div className='sysTray'>
            <h2 className='bookmarkHole'>●</h2>
            <h2 className='headerDate'><CurrentDate /></h2>
            <h4>Weather: </h4> 
           {weather && (
                <div className='geoData'>
                    <p>{weather.name}</p> 
                    <p>Temperature: {fahrenheitData(weather.main.temp)}°F</p> 
                    <p>{weather.weather[0].description}</p> 
                </div>
            )}
            <img src='../../../public/imgs/cuteFox.png' alt='fox image' />
        </div>
    )
}
