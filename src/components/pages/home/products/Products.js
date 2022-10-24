import React from 'react';
import './Products.css';
import utilityBills from './pay_for_utility.png';
import smartM from './smartm.png';
import smartMeter from './smart_meter.jpeg';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Products = () => {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <div className="item" data-value="1"><img src={utilityBills}/> <p>Electricity Prepayment Smart Meters</p></div>,
        <div className="item" data-value="2"><img src={utilityBills}/><p>3rd Party Platform Automation/API Sharing</p></div>,
        <div className="item" data-value="3"><img src={utilityBills}/><p>Smart Energy Eco-System</p></div>,
        <div className="item" data-value="4"><img src={utilityBills}/><p>Universal Gateway (PUG) Power Solution</p></div>,
        <div className="item" data-value="5"><img src={utilityBills}/><p>Electricity Prepayment Smart Meters</p></div>,
    ];


  return (
    <div className='products_containner'>
      <div className="products_title">
            <p>Our Products</p>
            <p>Our unique and global products are distinguished by recent innovations in the individual sectors of focus. These products make it possible for customers to monitor their electricity usage and effectively manage their power consumption and avoid wastage. <br/>
              We have developed a wide range of tools and innovations using Artificial Intelligence (AI), BlockChain, and Mobile technology to provide business solutions across the electricity value chain and hence enable a smart energy ecosystem that significantly reduces ATC&C losses and propagates an exponential lift in revenue for the power sector in Africa.</p>
      </div>
      <div className="products_main">
        <div className="product_card">
            <div className="product_image">
                <AliceCarousel className="products_containner"
                mouseTracking
                items={items}
                autoPlay
                autoPlayInterval={1500}
                infinite
                responsive={responsive}
                controlsStrategy="alternate"
                />
            </div>
            
            {/* <div className="product_description">
                <p>The PayAfrik electricity prepayment smart meter is a single phase and three phase electricity meter that provides in real-time the data of customers and ensures energy efficiency by reducing commercial loses while improving billing and collections.</p>
            </div> */}
        </div>

      </div>
    </div>
  )
}

export default Products
