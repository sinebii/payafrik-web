import React from 'react';
import './Products.css';
import utilityBills from './pay_for_utility.png';
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
        <div className="item" data-value="2"><img src={utilityBills}/><p>Electricity Prepayment Smart Meters</p></div>,
        <div className="item" data-value="3"><img src={utilityBills}/><p>Electricity Prepayment Smart Meters</p></div>,
        <div className="item" data-value="4"><img src={utilityBills}/><p>Electricity Prepayment Smart Meters</p></div>,
        <div className="item" data-value="5"><img src={utilityBills}/><p>Electricity Prepayment Smart Meters</p></div>,
    ];


  return (
    <div className='products_containner'>
      <div className="products_title">
            <p>Our Products</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius atque fugit ratione tempore minima alias enim eum. Tempore labore repudiandae consequatur error facilis sit commodi nisi hic corporis officiis praesentium fugiat quibusdam voluptas dolore, beatae, nobis sapiente magnam temporibus laudantium maiores. </p>
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
