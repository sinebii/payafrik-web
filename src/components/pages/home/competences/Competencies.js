import React from 'react'
import './Competencies.css';
import { VscFeedback } from "react-icons/vsc";
import { VscLock } from "react-icons/vsc";
import { VscBroadcast } from "react-icons/vsc";
import { VscVm } from "react-icons/vsc";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const Competencies = () => {
  return (
    <div className='hey'>
        <div className='core_competences'>
            <div className="core_competencies_left">
                <div className="flip-card-parent">
                    <div class="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <VscVm className='pIcons'/>
                                    <p>Manage Electricity Better</p>
                                    <p className='subText_card'>#</p>
                                </div>
                                <div className="flip-card-back">
                                    <h1>John Doe</h1>
                                    <p>Architect & Engineer</p>
                                    <p>We love that guy</p>
                                </div>
                            </div>
                    </div> 
                </div>
                <div className="flip-card-parent">
                    <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <VscWorkspaceTrusted className='pIcons'/>
                                    <p>Smart Metering</p>
                                    <p className='subText_card'>#</p>
                                </div>
                                <div className="flip-card-back">
                                    <h1>John Doe</h1>
                                    <p>Architect & Engineer</p>
                                    <p>We love that guy</p>
                                </div>
                            </div>
                    </div> 
                </div>
            </div>
            <div className="core_competencies_left">
                <div className="flip-card-parent">
                    <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">

                                    <VscBroadcast className='pIcons'/>
                                    <p>Cross Border Payment </p>
                                    <p className='subText_card'>#</p>
                                </div>
                                <div className="flip-card-back">
                                    <h1>John Doe</h1>
                                    <p>Architect & Engineer</p>
                                    <p>We love that guy</p>
                                </div>
                            </div>
                    </div> 
                </div>
                <div className="flip-card-parent">
                    <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <VscFeedback className='pIcons'/>
                                    <p>Great Eperience</p>
                                    <p className='subText_card'>#</p>
                                </div>
                                <div className="flip-card-back">
                                    <h1>John Doe</h1>
                                    <p>Architect & Engineer</p>
                                    <p>We love that guy</p>
                                </div>
                            </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Competencies
