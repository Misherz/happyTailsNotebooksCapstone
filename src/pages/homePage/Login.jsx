import '../../css/loginPg.css'
import NavBar from '../../components/navBar/NavBar'
import BackgroundImg from './BackgroundImg'
import Footer from '../../components/footer/Footer'
import '../../../public/imgs/pencil.png'

export default function LoginPage() {
    return (
        <div className='contactPage'>
            <BackgroundImg />
            <NavBar />
            <div className='midLogin'>
                <div className='Login'>
                    <div className='loginBox'>
                        <h1 className='bxTitle'>Login</h1>
                        <input type='text' className='input' placeholder='Username'></input
                        ><br />
                        <input type='text' className='input' placeholder='Password'></input> 
                        <br />
                        <button className="submitBtn" type='button'>Submit</button>
                        <br />
                        <img className="pencil" src='../../../public/imgs/pencil.png' alt='pencil icon' />
                     </div>              
                </div>
                <div className='signUp'>
                    <div className='signUpBox'>
                        <h1 className='bxTitle'>Sign Up</h1>
                        <input type='text' className='input' placeholder='First Name'></input>
                        <input type='text' className='input' placeholder='Last Name'></input>
                        <input type='Last Name' className='input' placeholder='Email'></input>
                        <input type='text' className='input' placeholder='Username'></input>
                        <input type='text' className='input' placeholder='Password'></input>
                        <br />
                        <button className="submitBtn" type='button'>Submit</button>
                </div>
                     </div>
                <img src="/imgs/FoxLogo.png" alt="Image of Happy Tails Notebooks Fox mascot" className="foxImg" />
            </div>
            <Footer />
        </div>
    )
}
