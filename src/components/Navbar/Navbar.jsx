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
      </div>
    </div>
  );
};

export default Navbar;
