import React from 'react';
import './Utilities.css';
import {Link } from "react-router-dom";

const Utilities = ({utilities}) => {
    console.log(utilities);
  return (
    <div className='utilities_main_container'>
      {utilities.map(utility=>{
        return <Link to="/dashboard/buypower"><div key={utility} className="util">{utility.name}
        <p>{utility.icon}</p>
        </div>
        </Link>
      })}
    </div>
  )
}

export default Utilities
