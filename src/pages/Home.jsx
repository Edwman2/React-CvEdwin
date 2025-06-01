import profilePic from '../assets/profile.jpeg'
import '../App.css'

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="content">
        <h1>
          Hi! My name is <span className="name">Edwin</span>
        </h1>
        <h2>I'm soon to be a Fullstack-developer</h2>
        <h3>Studying at Chas Academy</h3>

        <div className="socials-icons">
          <a
            href="https://www.linkedin.com/in/edwin-torres-82b37316b/"
            target="_blank"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a href="https://www.instagram.com">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://github.com/Edwman2?tab=repositories" target="_blank">
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>
      <div className="background-img">
        <img src={profilePic} alt="Profile" />
      </div>
    </section>
  )
}
