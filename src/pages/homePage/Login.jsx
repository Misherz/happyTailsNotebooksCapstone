import '../../css/loginPg.css';
import NavBar from '../../components/navBar/NavBar';
import BackgroundImg from './BackgroundImg';
import Footer from '../../components/footer/Footer';
import '../../../public/imgs/pencil.png';
import { useState } from 'react';

export default function LoginPage() {
    const [isNew, setIsNew] = useState(false);

    // Toggle between sign up and login
    function onClick() {
        setIsNew((prev) => !prev);
    }

    return (
        <div className="contactPage">
            <BackgroundImg />
            <NavBar />
            <div className="midLogin">
                {!isNew && (
                    <div className="Login">
                        <div className="loginBox">
                            <h1 className="bxTitle">Login</h1>
                            <input type="text" className="input" placeholder="Username" />
                            <br />
                            <input type="text" className="input" placeholder="Password" />
                            <br />
                            <button className="submitBtn" type="button">
                                Login
                            </button>
                            <br />
                            <p className="soul">Writing heals the soul...</p>

                         
                            <img className="pencil" src="../../../public/imgs/pencil.png" alt="pencil icon" />
                            <br />
                      
                            <button className="submitBtn" onClick={onClick}>
                                {isNew ? "Back to Login" : "New? Sign Up!"}
                            </button>
                        </div>
                    </div>
                )}

                {isNew && (
                    <div className="signUp">
                        <div className="signUpBox">
                            <h1 className="bxTitle">Sign Up</h1>
                            <input type="text" className="input" placeholder="First Name" />
                            <input type="text" className="input" placeholder="Last Name" />
                            <input type="text" className="input" placeholder="Email" />
                            <input type="text" className="input" placeholder="Username" />
                            <input type="text" className="input" placeholder="Password" />
                            <br />
                            <button className="submitBtn" type="button">
                                Submit
                            </button>
                            <br />
                            
                            <button className="submitBtn" onClick={onClick}>
                                Back to Login
                            </button>
                        </div>
                    </div>
                )}

                <img src="/imgs/FoxLogo.png" alt="Image of Happy Tails Notebooks Fox mascot" className="foxImg" />
            </div>
            <Footer />
        </div>
    );
}
