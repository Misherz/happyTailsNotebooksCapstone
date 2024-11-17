import NavBar from "../../components/navBar/NavBar"
import AboutPage from "./AboutPage"
import '../../css/homePg.css'


export default function HomePage(){
    return (
        <div>
            <NavBar />
            <h2 className="homeHeader">Welcome to Happy Tails Notebooks</h2>
            <img src="/imgs/FoxLogo.png" alt="Image of Happy Tails Notebooks Fox mascot" className="foxImg" />
        </div>
    )
}