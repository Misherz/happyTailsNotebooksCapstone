// import '../css/dashboardPg.css'
import '../css/journal.css'

import NavBar from '../components/navBar/NavBar'
import BackgroundImg from '../pages/homePage/BackgroundImg'
import Footer from '../components/footer/Footer';
import SystemTray from '../components/navBar/SystemTray';

import React from 'react';
import { useState, useEffect } from 'react';
import { getPhotoData } from '../apis/photosData.mjs';
import { getQuoteData } from '../apis/quotesData.mjs'
import MyCalendar from '../components/calendar/Calendar';
import MyEntries from '../components/calendar/JournalEntries';


export default function Dashboard() {
    const calendarSize = 0.4;

    return (
        <div className='dashBoard'>
            <BackgroundImg />
            <NavBar />
            <SystemTray />
            <div className='midContent'>
                <div className='calendarBox'>
                <MyCalendar style={{ transform: `scale(${calendarSize})`, transformOrigin: 'top center' }} />
                </div>
                <div className='journaling'>
                <MyEntries />
                </div>
            </div>
            <Footer />
        </div >
    )
}
