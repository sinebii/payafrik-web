import React from 'react';
import './Sidebar.css';
import {Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="utility_link">
        <Link to="/dashboard/buypower">Buy Power</Link>
      </div>
      <div className="utility_link">
        <Link to="/dashboard/buypower">Rwanda Electricity</Link>
      </div>
      <div className="utility_link">
        <Link to="/dashboard/buypower">Airtime & Data</Link>
      </div>
      <div className="utility_link">
        <Link to="/dashboard/buypower">Cable TV Subscription</Link>
      </div>
      <div className="utility_link">
        <Link to="/dashboard/buypower">Smart Control</Link>
      </div>
      <div className="utility_link">
        <Link to="/dashboard/buypower">Help & Support</Link>
      </div>
    </div>
  )
}

export default Sidebar
