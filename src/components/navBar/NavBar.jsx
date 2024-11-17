import '../../css/navBar.css'


export default function NavBar() {
    


    //standard navBar for homepg, same css structure button but only unique layout of all 4 pages
    return (
        <div className='navBar'>
            <img src="/imgs/HTNLogo.PNG" alt="HTN Logo" className='logo' />
            <br />
            <button type='button' className='navButton'>About</button>
            <br />
            <button type='button' className='navButton'>Contact</button>
            <br />
            <button type='button' className='navButton'>Login</button>
        </div>
    )
}
