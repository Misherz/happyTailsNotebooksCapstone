import '../css/dashboardPg.css'

import NavBar from '../components/navBar/NavBar'
import BackgroundImg from '../pages/homePage/BackgroundImg'
import Footer from '../components/footer/Footer';
import SystemTray from '../components/navBar/SystemTray';

import React from 'react';
import { useState, useEffect } from 'react';
import { getPhotoData } from '../apis/photosData.mjs';
import { getQuoteData } from '../apis/quotesData.mjs'
import MyCalendar from '../components/calendar/Calendar';


export default function Dashboard() {



    return (
        <div className='dashBoard'>
            <BackgroundImg />
            <NavBar />
            <SystemTray />
            <MyCalendar />
            <Footer />
        </div >
    )
}
