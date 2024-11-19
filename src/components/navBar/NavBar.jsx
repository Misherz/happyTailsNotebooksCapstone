import React from 'react';
import '../../css/navBar.css'
import { Link } from 'react-router-dom';

export default function NavBar() {
    
    //Link does not require additional logic before navigation
    //Link is better fit for homepage layout as opposed to useNavigate

    //standard navBar for homepg, same css structure button but only unique layout of all 4 pages
    return (
        <div className='navBar'>
            <Link to="/">
                <img src="/imgs/HTNLogo.PNG" alt="HTN Logo" className='logo' />
            </Link>
            <br />
            <Link to="/about">
                <button type='button' className='navButton' onClick={() => navigateBtns('/about')}>About</button>
            </Link>
            <br />
            <Link to="/contact">
                <button type='button' className='navButton'>Contact</button>
            </Link>
            <br />
            <Link to="/Login">
                <button type='button' className='navButton'>Login</button>
            </Link>
        </div>
    )
}
