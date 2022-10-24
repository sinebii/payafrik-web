import React from 'react';
import './Footer.css';
import logo from '../nav/payAfrik_logo.png';
import { FaFacebook } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
import { FaRavelry } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='home_footer'>
      <div className="home_footer_top">
          <div className="footer_top_left">
            <div className="footer_logo">
              <img src={logo}/>
            </div>
            <div className="sm_logos">
            <FaFacebook className='sml'/>
            <FaChrome className='sml'/>
            <FaRavelry className='sml'/>
            <FaFacebook className='sml'/>
            <FaChrome className='sml'/>
            <FaRavelry className='sml'/>
            </div>
          </div>
          <div className="footer_top_right">
            <div className="fast_links">
              <li className='list_header'>Resources</li>
              <li>Publications</li>
              <li>Case Studies</li>
              <li>Video</li>
            </div>
            <div className="fast_links">
              <li className='list_header'>Information</li>
              <li>Solutions</li>
              <li>Products/Serives</li>
              <li>News Room</li>
              <li>Events</li>
            </div>
            <div className="fast_links">
              <li className='list_header'>Contact</li>
              <li>Contact us</li>
              <li>Careers</li>
              <li>Report an Issue</li>
            </div>
          </div>
      </div>
      <div className="home_footer_bottom">
        <div className="footer_bottom_left">
            <p>© 2019 PayAfrik Smart Technology Solutions</p>
        </div>
        <div className="footer_bottom_right">
            <ol className='footer_bottom_right_content'>
                <li>Contact</li>
                <li>Privacy Policy</li>
            </ol>
        </div>
      </div>
    </div>
  )
}

export default Footer
