import React from 'react'
import './Navbar.css';

 const Navbar = () => {
  return (
    
    <nav className='nav_container'>
    <div className="nav_left">
       <a href='#home'>HR</a> 
    </div>

    <div className="nav_right">
        <a href="#about" className="nav_link">
            <span>01.</span>About
        </a>
       
        <a href="#experience" className="nav_link">
        <span>02.</span>Experience
        </a>

        <a href="#work" className="nav_link">
        <span>03.</span>Work
        </a>

        <a href="#contact" className="nav_link">
        <span>04.</span>Contact
        </a>

        <button className="nav_resume_btn">
            Resume
        </button>
    </div>

    </nav>
    
  )
}
 export default Navbar;