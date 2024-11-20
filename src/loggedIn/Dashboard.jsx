import '../css/dashboardPg.css'

import NavBar from '../components/navBar/NavBar'
import BackgroundImg from '../pages/homePage/BackgroundImg'

import React from 'react';
import { useState, useEffect } from 'react';
import { getPhotoData } from '../apis/photosData.mjs';
import Footer from '../components/footer/Footer';

export default function Dashboard() {
    const [dailyPhotos, SetDailyPhotos] = useState(null);

    async function getPhotos() {
        try {
            const photosData = await getPhotoData();

            let todaysDate = new Date().getDate() + 1;
            const randomPhoto = photosData[todaysDate % photosData.length];

            SetDailyPhotos(randomPhoto)

        } catch (err) {
            console.error("Cannot get article", err)
        }
    }

    //Invoke data with [], runs only on mount
    useEffect(() => {
        getPhotos();
    }, []);


    return (
        <div className='dashBoard'>
            <BackgroundImg />
            <NavBar />
            <div className='midDashboard'>
                <h1>Photo of the Day</h1>
                {dailyPhotos ? (
                    <div className='photoBlock'>
                        <img
                            src={dailyPhotos.download_url}
                            alt={`Image of the day by ${dailyPhotos.author}`}
                            className='imgDaily'
                        />
                        <p>{dailyPhotos.author}</p>
                    </div>
                ) : (
                    <p>Loading...</p> 
                )}
            </div>
            <div className='dashboardBtns'>
                <button type='button' className='dashboardBtn'>JOURNAL</button>
                <button type='button' className='dashboardBtn'>HABIT TRACKER</button><br />
                <button type='button' className='dashboardBtn'>EVENTS</button>
                <button type='button' className='dashboardBtn'>COMMUNITY</button>
            </div>
            <Footer />
        </div>
    )
}
