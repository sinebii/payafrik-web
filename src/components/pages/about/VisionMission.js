import React from 'react';
import { FaLowVision } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

const VisionMission = () => {
  return (
    <div className='vision_mission_container'>
        <div className="vision">
            <div className="title">
                <FaLowVision/>
                <p> Vision</p>
            </div>
            <div className="body">
                <p>To Accelerate development in Africa through the optimization of Africa’s utility payment industry.</p>
            </div>
        </div>
        <div className="mission">
            <div className="title">
                <FaBullseye/>
                <p> Mission</p>
            </div>
            <div className="body">
                <p>To provide smart utility payment services across Africa through innovative solutions.</p>
            </div>
        </div>
        <div className="values">
            <div className="title">
                <FaSignOutAlt/>
                <p> Values</p>
            </div>
            <div className="body">
                <p>Our Core values are: Commitment to Clients, Integrity, Personal Development, Teamwork and Excellence.</p>
            </div>
        </div>
      
    </div>
  )
}

export default VisionMission
