import React from 'react';
import './Products.css';
import utilityBills from './pay_for_utility.png';
import smartMeter from './smart_meter.jpeg';

const Products = () => {
  return (
    <div className='products_containner'>
      <div className="products_title">
            <p>Our Products</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius atque fugit ratione tempore minima alias enim eum. Tempore labore repudiandae consequatur error facilis sit commodi nisi hic corporis officiis praesentium fugiat quibusdam voluptas dolore, beatae, nobis sapiente magnam temporibus laudantium maiores. </p>
      </div>
      <div className="products_main">
        <div className="product_card">
            <div className="product_image">
                <img src={utilityBills} alt="" />
            </div>
            <div className="product_title">
                <p>Electricity Prepayment Smart Meters</p>
            </div>
            <div className="product_description">
                <p>The PayAfrik electricity prepayment smart meter is a single phase and three phase electricity meter that provides in real-time the data of customers and ensures energy efficiency by reducing commercial loses while improving billing and collections.</p>
            </div>
        </div>
        <div className="product_card">
            <div className="product_image">
                <img src={utilityBills} alt="" />
            </div>
            <div className="product_title">
                <p>Smart Vending System and Utility Payment Solution</p>
            </div>
            <div className="product_description">
                <p>PayAfrik smart vending system boast of a world class ICT infrastructure that drives its utility vending system with limitless capabilities. With a convenient and user-friendly Mobile payment App it has the capacity to improve billing and collection.</p>
            </div>
        </div>
        <div className="product_card">
            <div className="product_image">
                <img src={utilityBills} alt="" />
            </div>
            <div className="product_title">
                <p>Distribution Network Mapping & Customer Indexation</p>
            </div>
            <div className="product_description">
                <p>PayAfrik provides comprehensive distribution network mapping and updated customer indexation using the latest GIS (Geographic Information System) technology, mobile data collection app and map editor.</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Products
