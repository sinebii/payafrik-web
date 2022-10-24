import React from 'react';
import Nav from '../nav/Nav';
import BreadCrumb from '../../breadcrumb/BreadCrumb';
import Abt from './Abt';
import SmartTech from './SmartTech';
import VisionMission from './VisionMission';
import Footer from '../footer/Footer';


const About = () => {

    const breadcrumb ={
        title:"ABOUT US",
        subTitle:"Providing Smart Technology Solutions"
    }
    
  return (
    <div className='about_container'>
      <Nav/>
      <BreadCrumb breadcrumb={breadcrumb}/>
      <Abt/>
      <VisionMission/>
      <SmartTech/>
      <Footer/>
    </div>
  )
}

export default About
