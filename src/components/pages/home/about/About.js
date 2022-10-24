import React from 'react';
import './About.css';
import aboutImage from './future-of-smart-technology-in-home.jpg';
import { FaAngleDoubleRight } from "react-icons/fa";


const About = () => {
  
  return (
    <div className='home_about'>
      <div className="about_image">
        <img src={aboutImage} alt="About Image"/>
      </div>
      <div className="about_content">
        <div className="about_title">
          <p>About PayAfrik</p>
        </div>
        <div className="about_text">
          <p>
          PayAfrik World Connect Limited, is a Smart-Technology company focused on using novel and innovative smart-technology to provide solutions to traditional and evolving challenges in the utility sector in Nigeria and Africa.<br/>
          We have developed  a wide range of tools and innovations in the energy sector using Artificial Intelligence (AI), BlockChain and Mobile technology to provide business solutions across the electricity value chain and thus enable a smart energy ecosystem that significantly reduces Aggregated Technical, Commercial and Collection (ATC&C) loses and propagate an exponential lift in revenue for  the electricity Distribution Industry.
          </p>
        </div>
        <div className="about_btn">
          <button><FaAngleDoubleRight/> Read More</button>
        </div>
      </div>
    </div>
  )
}

export default About
