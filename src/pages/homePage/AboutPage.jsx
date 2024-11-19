import '../../css/aboutPg.css'
import NavBar from '../../components/navBar/NavBar'
import BackgroundImg from './BackgroundImg'

export default function AboutPage() {
    return (
        <div className='aboutPage'>
            <BackgroundImg />
            <NavBar />
            <div className='midAbout'>
                <div className='aboutTxt'>
                    <h1 className='aboutTitle'>About Us</h1>
                    <p className='aboutP'>
                        Welcome to Happy Tails Notebooks, a space for reflection and mental well-being. In today’s fast-paced world, stress and anxiety are common, and journaling offers a simple way to find clarity and peace.
                    </p>
                    <h2 className='aboutTitle'>Our Purpose</h2>
                    <p className='aboutP'>
                        We believe writing is a therapeutic tool that helps process emotions, reduce stress, and improve mental health. By journaling, you can track progress, reflect on your journey, and connect more deeply with yourself. Why Journaling?
                        Studies show journaling reduces stress, improves emotional clarity, and supports mental health. Join us in cultivating a mindful, stress-free space — one entry at a time.
                    </p>
                    <h2 className='aboutTitle'>Key Features</h2>
                    <p className='aboutP'>
                        Personalized Entries: Write about your day, thoughts, and experiences anytime.
                        Mental Health Tracking: Track mood and thoughts over time with visual insights.
                        Weather & Location Integration: Connect your emotions to your environment with daily updates.
                        Serotonin Boost: Get a daily image to inspire positive thinking.
                        Data Privacy: Your journal is secure and private.
                    </p>
                </div>
                <img src="/imgs/FoxLogo.png" alt="Image of Happy Tails Notebooks Fox mascot" className="foxImg" />
            </div>
        </div>
    )
}
