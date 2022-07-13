import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Links</a>
      <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Experiences</a></li>
      <li><a href="#">services</a></li>
      <li><a href="#">Testemonials</a></li>
      <li><a href="#">Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>
    </footer>
  )
}

export default Footer