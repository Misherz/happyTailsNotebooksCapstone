
import NavBar from "../components/navBar/NavBar"
import Footer from "../components/footer/Footer"
import BackgroundImg from "./homePage/BackgroundImg"
import '../../public/imgs/pgnotfound.png'
import '../css/pgNotFoundPg.css'

export default function PageNotFound() {
    return (
        <div>
        <BackgroundImg />
        <h1 className="pgNFH">404</h1>
        <p className="pTxt">Page Not Found</p>
        <img className="fox" src="../../public/imgs/pgnotfound.png" alt="Fox Pic" />
        <NavBar />
        <Footer />
        </div >
    )
}

//happyTailsNotebooksCapstone\frontEnd\public\imgs\pgnotfound.png