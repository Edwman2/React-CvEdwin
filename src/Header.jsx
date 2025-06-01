function Header(){
return(
    <header className="header">
      <div id="icon-menu">☰</div>
      <nav className="navbar">
        <div className="name">Edwin <span>Torres</span></div>
        <ul className="nav-list">
          <li><a href="index.html" className="active">Home</a></li>
          <li><a href="About.jsx">About</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="resume.html">Resume</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </header>
)
}
export default Header