import { useState } from 'react'
import './App.css'
import './css/body.css'
import HomePage from './pages/homePage/HomePage'
import NavBar from './components/navBar/NavBar'
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/homePage/AboutPage'
import ContactPage from './pages/homePage/ContactPage'
import LoginPage from './pages/homePage/Login'
import Dashboard from './loggedIn/Dashboard'

//cannot put jsx components in Router
function App() {


  return (
    <>
        <NavBar />
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/contact" element={<ContactPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
    </>
  )
}

export default App
