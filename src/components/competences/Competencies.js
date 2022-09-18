import React from 'react'
import './Competencies.css';
import { FaDesktop } from "react-icons/fa";

const Competencies = () => {
  return (
    <div className='hey'>
        <div className='core_competences'>
        <div className="core_competencies_left">
            <div className="flip-card-parent">
                <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <p>Smart Products</p>
                            </div>
                            <div class="flip-card-back">
                                <h1>John Doe</h1>
                                <p>Architect & Engineer</p>
                                <p>We love that guy</p>
                            </div>
                        </div>
                </div> 
            </div>
            <div className="flip-card-parent">
                <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <p>Great experience</p>
                            </div>
                            <div class="flip-card-back">
                                <h1>John Doe</h1>
                                <p>Architect & Engineer</p>
                                <p>We love that guy</p>
                            </div>
                        </div>
                </div> 
            </div>
        </div>
        <div className="core_competencies_right">
        <div className="flip-card-parent">
                <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src="" alt="Avatar" />
                            </div>
                            <div class="flip-card-back">
                                <h1>John Doe</h1>
                                <p>Architect & Engineer</p>
                                <p>We love that guy</p>
                            </div>
                        </div>
                </div> 
            </div>
            <div className="flip-card-parent">
                <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src="" alt="Avatar" />
                            </div>
                            <div class="flip-card-back">
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
