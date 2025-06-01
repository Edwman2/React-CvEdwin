import {useRef} from 'react'
import runawayAudio from '../assets/Runaway.mp3'
import '../Contact.css'
export default function Contact(){

    const audioRef = useRef(null);

    const playMyAudio = () => {
        if(audioRef.current) {
            audioRef.current.Play();
        }
    }
    return(
        <section className="contact" id="contact">
        <div className="content-box">
            <h1>Contact</h1>
            <h2 className="contacts">
                Here you have different ways to contact me.
            </h2>
            <div className="socials-icons">
                <a href="https://www.linkedin.com/in/edwin-torres-82b37316b/" target ="_blank"><i className='bx bxl-linkedin-square' ></i></a>
                <audio ref={audioRef} src={runawayAudio}></audio>
                <button className="myButton" onClick={playMyAudio}><a href="https://www.instagram.com" target="_blank"><i className='bx bxl-instagram' ></i></a></button>
                <a href="https://github.com/Edwman2?tab=repositories" target="_blank"><i className='bx bxl-github' ></i></a>
            </div>
            <h3>Or if you prefer to email</h3>
            <a href="mailto:edwintorres@live.se"><button className="email-button">Email Me</button></a>
            
        </div>
        
    </section>
    )
}