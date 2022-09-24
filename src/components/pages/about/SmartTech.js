import React from 'react';
import './About.css';
import { FcElectricity } from "react-icons/fc";
import { FaWater } from "react-icons/fa";
import { FaGasPump} from "react-icons/fa";
import { MdPayment} from "react-icons/md";
import { FaCity} from "react-icons/fa";

const SmartTech = () => {
  return (
    <div className='smart_tech_container'>
      <div className="smart_tech_title">
        <p>PayAfrik smart technology has addressed</p>
      </div>
      <div className="smart_tech_body">
            
            <div className="es">
                <FcElectricity className='st_icons'/>
                <p>Electricity supply industry </p>
            </div>
            <div className="gs">
                
                <FaGasPump className='st_icons'/>
                <p>Gas metering/purchase</p>
            </div>
            <div className="wm">
                <FaWater className='st_icons'/>
                <p>Water metering/purchase </p>
            </div>
            <div className="cbp">
                <MdPayment className='st_icons'/>
                <p>Cross border payment using XRPLEDGER.</p>
            </div>
            <div className="sc">
                <FaCity className='st_icons'/>
                <p>Smart city</p>
            </div>
      </div>
    </div>
  )
}

export default SmartTech
