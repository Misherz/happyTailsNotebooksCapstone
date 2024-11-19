import '../../css/homePg.css'
import BackgroundImg from "./BackgroundImg";
import NavBar from "../../components/navBar/NavBar"


export default function HomePage(){


    return (
        <div>
            <BackgroundImg />
            <NavBar />
            <h2 className="homeHeader">Welcome to Happy Tails Notebooks</h2>
            <img src="/imgs/FoxLogo.png" alt="Image of Happy Tails Notebooks Fox mascot" className="foxImg" />



        </div>
    )
}