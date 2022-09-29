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
          PayAfrik is a smart-tech company focused on using novel and innovative smart-technology to provide solutions to traditional and evolving challenges in the electricity sector in Africa.We have developed a wide range of tools and innovations using Artificial Intelligence (AI), BlockChain and Mobile technology to provide business solutions across the electricity value chain and thus enable a smart energy ecosystem that significantly reduces ATC&C looses and propagate an exponential lift in revenue for the utility sector in Africa.
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
