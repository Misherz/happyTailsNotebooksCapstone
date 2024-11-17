import '../../css/aboutPg.css'
import NavBar from '../../components/navBar/NavBar'

export default function AboutPage() {
    return (
        <div className='aboutPage'>
            <NavBar />
            <div className='midAbout'>
                <div className='aboutTxt'>
                    <h1 className='aboutTitle'>About Us</h1>
                    <p className='aboutP'>
                        Welcome to Happy Tails Notebooks, your personal space for reflection, growth, and mental well-being. In today’s fast-paced world, stress and anxiety have become all too common. Whether it’s the pressures of daily life, financial worries, or social challenges, it can be difficult to manage everything at once. That’s why we created Happy Tails Notebooks — to help you find clarity and peace through the simple, yet powerful act of journaling.
                    </p>
                    <h2 className='aboutTitle'>Our Purpose</h2>
                    <p className='aboutP'>
                        At Happy Tails Notebooks, we believe that writing can be a therapeutic tool that helps you process emotions, relieve stress, and improve your mental health. Journaling allows you to capture your thoughts and feelings in a safe space, track your progress, and reflect on your personal journey. By making journaling accessible and easy, we hope to empower you to take control of your well-being and feel more connected to yourself.
                    </p>
                    <h2 className='aboutTitle'>Key Features</h2>
                    <p className='aboutP'>
                        Our app is designed to make journaling as seamless and effective as possible. With features like:

                        Personalized Journal Entries: Write freely about your day, thoughts, and experiences. Create new entries or revisit old ones anytime.
                        Mental Health Tracking: See patterns in your mood and thoughts over time, and track progress with helpful logs and visual insights.
                        Weather & Location Integration: Get context for your entries with daily weather updates and location-based insights, helping you connect your environment with your emotions.
                        Serotonin Boost: Each day, receive a serotonin-boosting image to brighten your mood and inspire positive thinking.
                        Data Privacy: Your journal is yours alone. We take your privacy seriously and ensure your data is protected.
                        Full Control of Your Journey
                        Our app supports full CRUD (Create, Read, Update, Delete) functionality, meaning you have full control over your entries:

                        Create: Add new journal entries whenever you feel inspired.
                        Read: Easily browse and read through past entries to reflect on your progress.
                        Update: Edit entries as needed to refine your thoughts or add new reflections.
                        Delete: Remove entries you no longer wish to keep, ensuring your space remains personal and meaningful.
                        Why Journaling?
                        Studies show that expressive writing can significantly reduce stress, improve emotional clarity, and help you manage mental health better. Whether you’re journaling to reflect on your day, track your mood, or release pent-up emotions, Happy Tails Notebooks provides a safe, private space for self-expression.

                        Join us in creating a mindful, stress-free space to improve your mental well-being — one entry at a time.
                    </p>
                </div>
                <img src="/imgs/FoxLogo.png" alt="Image of Happy Tails Notebooks Fox mascot" className="foxImg" />
            </div>
        </div>
    )
}
