import React from 'react';
import Nav from '../nav/Nav';
import BreadCrumb from './BreadCrumb';
import Abt from './Abt';
import SmartTech from './SmartTech';
import VisionMission from './VisionMission';
import Footer from '../footer/Footer';


const About = () => {

    
  return (
    <div className='about_container'>
      <Nav/>
      <BreadCrumb/>
      <Abt/>
      <SmartTech/>
      <VisionMission/>
      <Footer/>
    </div>
  )
}

export default About
