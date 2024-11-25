import '../css/dashboardPg.css'

import NavBar from '../components/navBar/NavBar'
import BackgroundImg from '../pages/homePage/BackgroundImg'
import Footer from '../components/footer/Footer';
import SystemTray from '../components/navBar/SystemTray';

import React from 'react';
import { useState, useEffect } from 'react';
import { getPhotoData } from '../apis/photosData.mjs';
import { getQuoteData } from '../apis/quotesData.mjs'


export default function Dashboard() {
    const [dailyPhotos, SetDailyPhotos] = useState(null);
    const [dailyQuote, SetDailyQuotes] = useState(null);

    async function getPhotos() {
        try {
            const photosData = await getPhotoData();

            let todaysDate = new Date().getDate() + 1;
            const randomPhoto = photosData[todaysDate % photosData.length];

            SetDailyPhotos(randomPhoto)

        } catch (err) {
            console.error("Cannot get photo", err)
        }
    }

    async function getQuote() {
        try {
            const quoteData = await getQuoteData();
            
            if (quoteData && quoteData.length > 0) {
                const quote = quoteData[0].quote;
                const author = quoteData[0].author;
    
                SetDailyQuotes({ quote, author });
            } else {
                console.error("No quote data found");
            }
    
        } catch (err) {
            console.error("Cannot get quote", err);
        }
    }

    function wordPopUp() {
        wordOfTheDay = window.open(
            "https://www.merriam-webster.com/word-of-the-day",
            "Word of the Day",
            "width=900, height=600, resizable=yes, scrollbars=yes, location=yes"
        )
    }

    //Invoke data with [], runs only on mount
    useEffect(() => {
        getPhotos();
    }, []);

    useEffect(() => {
        getQuote();
    }, []);



    return (
        <div className='parent'>
            <BackgroundImg />
            <div className='dashBoard'>
            <NavBar />
            <SystemTray />
            <div className='midDashboard'>
                <div className='apis'>
                    <h2>Quotes of the Day</h2>
                    {dailyQuote ? (
                        <div className='quoteBlock'>
                            <p>{dailyQuote.quote}</p>
                            <p><em>- {dailyQuote.author}</em></p>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>

                {dailyPhotos ? (
                    <div className='photoBlock'>
                        <h1 className='headerTxt'>Photo of the Day</h1>
                        <img
                            src={dailyPhotos.download_url}
                            alt={`Image of the day by ${dailyPhotos.author}`}
                            className='imgDaily'
                        /><br />
                        <p className='txt'>{`Author: ${dailyPhotos.author}`}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
                <div className='infoButtons'>
                    <button type='button' onClick={wordPopUp} className='wod'>Get Word Of The Day</button>

                </div>
            </div>


            <div className='dashboardBtns'>
                <span className='section1'> 
                    <button type='button' className='dashboardBtn'>JOURNAL</button>
                    <button type='button' className='dashboardBtn'>HABIT TRACKER</button><br />
                </span>
                <span className='section2'> 
                    <button type='button' className='dashboardBtn'>EVENTS</button>
                    <button type='button' className='dashboardBtn'>COMMUNITY</button>
                </span>
            </div>
            <Footer />
        </div >
        </div>
    )
}
