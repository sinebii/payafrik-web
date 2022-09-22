import React,{useState} from 'react'
import './Home.css';
import Nav from '../nav/Nav';
import Slider from './slider/Slider';
import About from './about/About';
import Competencies from './competences/Competencies';
import Products from './products/Products';
import Contact from './contact/Contact';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import smartMeter from './products/pay_for_utility.png';



const Home = () => {
    // const handleDragStart = (e) => e.preventDefault();
    // const items = [
    //     <img src={smartMeter} onDragStart={handleDragStart} role="presentation" />,
    //     <img src={smartMeter} onDragStart={handleDragStart} role="presentation" />,
    //     <img src={smartMeter} onDragStart={handleDragStart} role="presentation" />,
    //   ];
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <div className="item" data-value="1"><img src={smartMeter}/></div>,
        <div className="item" data-value="2"><img src={smartMeter}/></div>,
        <div className="item" data-value="3"><img src={smartMeter}/></div>,
        <div className="item" data-value="4"><img src={smartMeter}/></div>,
        <div className="item" data-value="5"><img src={smartMeter}/></div>,
    ];
    
  return (
    <div className='main_container'>
        <Nav/>
        <Slider/>
        <Competencies/>
        <About/>
        {/* <AliceCarousel mouseTracking items={items} autoPlay={true} infinite={true}/> */}
        <Products/>
        <Contact/>
        {/* <Footer/> */}

        
      
    </div>
  )
}

export default Home
