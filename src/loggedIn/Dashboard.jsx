import NavBar from '../components/navBar/NavBar'
import BackgroundImg from '../pages/homePage/BackgroundImg'
import '../css/dashboardPg.css'

export default function Dashboard() {
    return (
        <div className='dashBoard'>
            <BackgroundImg />
            <NavBar />
            <div className='midDashboard'>
           </div>
        </div>
    )
}
