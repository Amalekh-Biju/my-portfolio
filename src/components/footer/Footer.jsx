import React from 'react'
import './footer.css'
import {BsInstagram,BsLinkedin} from 'react-icons/bs'
import {SiDiscord} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Amalekh Biju</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com"><BsInstagram/></a>
        <a href="https://discord.com"><SiDiscord/></a>
        <a href="https://linkedin.com"><BsLinkedin/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Amalekh Biju. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer