import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { SiLeetcode } from 'react-icons/si'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer_logo'>Divyendu Vimal</a>
        <ul className='links'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
        </ul>

        <div className='footer_social'>
            <a href=""><BsLinkedin/></a>
            <a href=""><BsGithub/></a>
            <a href=""><SiLeetcode/></a>
        </div>

        <div className='footer_copyright'>
            <small>&copy; Divyendu Vimal. All Rights Reserved.</small>
        </div>
    </footer>
  )
}

export default Footer