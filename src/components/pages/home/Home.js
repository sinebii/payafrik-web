import React,{useState} from 'react'
import './Home.css';
import Nav from '../nav/Nav';
import Slider from './slider/Slider';
import About from './about/About';
import Competencies from './competences/Competencies';
import Products from './products/Products';
import Contact from './contact/Contact';


const Home = () => {
  return (
    <div className='main_container'>
        <Nav/>
        <Slider/>
        <Competencies/>
        <About/>
        <Products/>
        <Contact/>
      
    </div>
  )
}

export default Home
