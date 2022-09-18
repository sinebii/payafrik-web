import React from 'react';
import './Products.css';
import utilityBills from './pay_for_utility.png';
import smartMeter from './smart_meter.jpeg';

const Products = () => {
  return (
    <div className='products_containner'>
      <div className="products_title">
            <p>Products</p>
            
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, pariatur magni placeat sed amet alias fuga sapiente laboriosam iste? Fugit quae consequuntur nobis odit doloremque aspernatur molestiae vel dignissimos debitis.</p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, pariatur magni placeat sed amet alias fuga sapiente laboriosam iste? Fugit quae consequuntur nobis odit doloremque aspernatur molestiae vel dignissimos debitis.</p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, pariatur magni placeat sed amet alias fuga sapiente laboriosam iste? Fugit quae consequuntur nobis odit doloremque aspernatur molestiae vel dignissimos debitis.</p>
            </div>
        </div>
        <div className="product_card">
            <div className="product_image">
                <img src={utilityBills} alt="" />
            </div>
            <div className="product_title">
                <p>Smart Network Monitoring Gateways</p>
            </div>
            <div className="product_description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, pariatur magni placeat sed amet alias fuga sapiente laboriosam iste? Fugit quae consequuntur nobis odit doloremque aspernatur molestiae vel dignissimos debitis.</p>
            </div>
        </div>
        <div className="product_card">
            <div className="product_image">
                <img src={utilityBills} alt="" />
            </div>
            <div className="product_title">
                <p>Universal Gateway (PUG) Power Solution</p>
            </div>
            <div className="product_description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, pariatur magni placeat sed amet alias fuga sapiente laboriosam iste? Fugit quae consequuntur nobis odit doloremque aspernatur molestiae vel dignissimos debitis.</p>
            </div>
        </div>
        <div className="product_card">
            <div className="product_image">
                <img src={utilityBills} alt="" />
            </div>
            <div className="product_title">
                <p>3rd Party Platform Automation/API Sharing</p>
            </div>
            <div className="product_description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, pariatur magni placeat sed amet alias fuga sapiente laboriosam iste? Fugit quae consequuntur nobis odit doloremque aspernatur molestiae vel dignissimos debitis.</p>
            </div>
        </div>
        <div className="product_card">
            <div className="product_image">
                <img src={utilityBills} alt="" />
            </div>
            <div className="product_title">
                <p> Smart Energy Eco-System</p>
            </div>
            <div className="product_description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, pariatur magni placeat sed amet alias fuga sapiente laboriosam iste? Fugit quae consequuntur nobis odit doloremque aspernatur molestiae vel dignissimos debitis.</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Products
