import React, { useState } from "react";
import "./navbar.css";
import { Link } from 'react-scroll'

const Navbar = () => {

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <div className={navbar ? 'navbar_container active' : 'navbar_container'}>
      <div className="navbar_content">
        <a href="https://www.hyundaiusa.com/us/en/vehicles/elantra" target="_blank" rel="noreferrer"><div className="logo">Elantra</div></a>
        <div className="links_container">
          <div className="links">
            <Link className="link" to="carousel" spy={true} smooth={true} duration={500}>Home</Link>
            <Link className="link" to="Specifications" spy={true} smooth={true} duration={500} offset={-250}>Specifications</Link>
            <Link className="link" to="Versions_container" spy={true} smooth={true} duration={500} offset={100}>Versions</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
