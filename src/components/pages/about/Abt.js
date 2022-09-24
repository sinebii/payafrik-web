import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import slide1 from './image-1.jpg';
import slide2 from './image-3.jpg';
import slide3 from './image-4.jpg';

const Abt = () => {
    const items = [
        <div className="item" data-value="1"><img src={slide1} alt="" /></div>,
        <div className="item" data-value="2"><img src={slide2} alt="" /></div>,
        <div className="item" data-value="3"><img src={slide3} alt="" /></div>,
    ];
  return (
    <div className='about_abt'>
      <div className="about_abt_text">
        <p>PayAfrik World connect is incorporated in Nigeria on the 3rd of July 2019 as a Technology Company with its business activities that will cut across provision of value addition services.PayAfrik is a smart-tech company focused on using novel and innovative smart-technology to provide solutions to traditional and evolving challenges in the electricity sector in Africa.We have developed a wide range of tools and innovations using Artificial Intelligence (AI), BlockChain and Mobile technology to provide business solutions across the electricity value chain and thus enable a smart energy ecosystem that significantly reduces ATC&C looses and propagate an exponential lift in revenue for the utility sector in Africa.</p>
      </div>
      <div className="about_abt_image">
      <AliceCarousel
        autoPlay
        autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={1500}
        animationDuration={1500}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
    />
      </div>
    </div>
  )
}

export default Abt
