import '../../css/contactPg.css'
import NavBar from '../../components/navBar/NavBar'
import BackgroundImg from './BackgroundImg'

export default function ContactPage() {
    return (
        <div className='contactPage'>
            <BackgroundImg />
            <NavBar />
            <div className='midContact'>
                <div className='contactTxt'>
                    <h1 className='contactTitle'>Contact Us</h1>
                    <p className='ContactP'>We’d love to hear from you! If you have any questions, comments, or feedback, please don’t hesitate to reach out.</p>
                   <table className='table'>
                    <th>Phone</th>
                    <tr>111-222-3333</tr>
                    <th>Email</th>
                    <tr>info@HappyTailsNotebooks.com</tr>
                    <th>Address</th>
                    <tr>221B Baker St</tr>
                    <tr>Marylebone, London</tr>
                    <tr>NW1 6XE, UK</tr>
                   </table>
                </div>
                <img src="/imgs/FoxLogo.png" alt="Image of Happy Tails Notebooks Fox mascot" className="foxImg" />
            </div>
        </div>
    )
}
