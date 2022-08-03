import React from 'react';
// import { capitalizeFirstLetter } from '../utils/helpers';
// import { Link } from 'react-router-dom';
import './header.css'

function Header() {
    return(
    <>
    <header className="header">
            <h1>
                <a href="/">HIRO KAGEI</a>
            </h1>
            <nav>
                <ul>
                    <li>      
                        <a href="#about-me">About Me</a>
                    </li>
                    <li>
                        <a href="#work">My Projects</a>
                    </li>
                    <li>
                        <a href="#resume">Resume</a>
                    </li>
                    <li>
                        <a href="#contact-me">Contact Me</a>
                    </li>
                </ul>
            </nav>
          </header>
          </>
    );
}

export default Header;