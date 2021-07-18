import React from 'react';
import './index.css';
import github from './../../assets/github.png';
import linkedin from './../../assets/linkedin.png';
export default function Footer() {
    return (


        <footer id='Footer'>&copy; 2021, Allisson Néo
        <header className ='socialMedia' >
            
            <a href='https://github.com/allissonneo'>
                <img className='Github' src={github} alt='' />
            </a> <a href='https://www.linkedin.com/in/allisson-neo/'>
                <img className='Linkedin' src={linkedin} alt='' />
            </a>
        </header>
        </footer>

    );
}