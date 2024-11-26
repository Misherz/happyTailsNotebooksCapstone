import '../../css/loginPg.css'
import NavBar from '../../components/navBar/NavBar'
import BackgroundImg from './BackgroundImg'
import Footer from '../../components/footer/Footer'
import '../../../public/imgs/pencil.png'
import { useState } from 'react'

export default function LoginPage() {
    const [isNew, setIsNew] =useState(false);
    
    //Toggle between sign up and login
    function onClick(isNew){
        setIsNew(prev => !prev);
    }

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
                        
                        <button className='submitBtn' onClick={onClick}>
                            {isNew ? "Back to Login" : "New? Sign Up!"}
                        </button>
                     </div>              
                </div>
                {isNew && (
                    <div className='signUp'>
                        <div className='signUpBox'>
                            <h1 className='bxTitle'>Sign Up</h1>
                            <input type='text' className='input' placeholder='First Name' />
                            <input type='text' className='input' placeholder='Last Name' />
                            <input type='text' className='input' placeholder='Email' />
                            <input type='text' className='input' placeholder='Username' />
                            <input type='text' className='input' placeholder='Password' /><br />
                            <button className="submitBtn" type='button'>Submit</button>
                        </div>
                    </div>
                )}

                <img src="/imgs/FoxLogo.png" alt="Image of Happy Tails Notebooks Fox mascot" className="foxImg" />
            </div>
            <Footer />
        </div>
    )
}
