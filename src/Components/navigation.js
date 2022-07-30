import React from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import { Link } from 'react-router-dom'

function Navigation(props) {
    const {
        categories = [],

    } = props;
    return(
    <>
    <nav>
                <ul>
                    <li>      
                        <a href="#about-me">About Me</a>
                    </li>
                    <li>
                        <a href="#work">Work</a>
                    </li>
                    <li>
                        <a href="#contact-me">Contact Me</a>
                    </li>
                </ul>
            </nav>
    </>
    );
}

export default Navigation;