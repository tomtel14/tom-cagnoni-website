import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const showLinks = () => {
    if (window.innerWidth >= 960) {
      setClick(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', showLinks)

    return () => {
      window.removeEventListener('resize', showLinks)
    }
  }, [])

  const [color, setColor] = useState(false);

  const colorTitle = () => {
    const fixedBGHeight = document.querySelector('.fixed-bg').clientHeight;
    const navbarHeight = document.querySelector('.navbar').clientHeight;
    const scrollHeight = window.pageYOffset + navbarHeight;
    if (scrollHeight >= fixedBGHeight) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', colorTitle)

    return () => {
      window.removeEventListener('scroll', colorTitle)
    }
  }, [])

  const [secondTitle, setSecondTitle] = useState(false);

  const showSecondTitle = () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight >= 810) {
      setSecondTitle(true);
    } else {
      setSecondTitle(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', showSecondTitle);

    return () => {
      window.removeEventListener('scroll', showSecondTitle)
    }
  }, []);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className={color ? "navbar color" : "navbar"}>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      <div className="nav-cont">
        <ul className={click ? "nav-list active" : "nav-list"}>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="musical-director"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMobileMenu}
            >
              Musical Director
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="composer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMobileMenu}
            >
              Composer
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="instrumentalist"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMobileMenu}
            >
              Instrumentalist
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="function-band"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMobileMenu}
            >
              Function Band
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="tutor"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMobileMenu}
            >
              Tutor
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className={secondTitle ? "second-title" : "second-title hidden"}>
          <h3>Tom Cagnoni</h3>
          <p>Musical Director | Composer | Instrumentalist | Tutor</p>
        </div>
      </div>

    </nav >
  );
}

export default Navbar;
