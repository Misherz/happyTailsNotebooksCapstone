import NavBar from "../../components/navBar/NavBar"
import AboutPage from "./AboutPage"
import '../../css/homePg.css'
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react";
import BackgroundImg from "./BackgroundImg";


export default function HomePage(){
    function handleOnClick(){};
    function handleChange(){};
    

    return (
        <div>
            <BackgroundImg />
            <NavBar />
            <h2 className="homeHeader">Welcome to Happy Tails Notebooks</h2>
            <img src="/imgs/FoxLogo.png" alt="Image of Happy Tails Notebooks Fox mascot" className="foxImg" />
        </div>
    )
}