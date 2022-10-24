import React from 'react'
import './BuyPower.css';
import Nav from '../nav/Nav';

const BuyPower = () => {
  return (
    <div className='buypower_main_container'>
        <Nav/>
      <div className="buypower_form_container">
        <div className="buypower_header">
            <p>Buy Electricity Units</p>
            <p>Fill the form below to begin</p>
        </div>
        <div className="main_form">
            <form action="">
                <div className="formGroup">
                    <label htmlFor="meterNumber">Enter Meter Number</label>
                    <input type="text" name="" id="" placeholder='Meter Number'/>
                </div>
                <div className="formGroup">
                    <label htmlFor="meterNumber">Enter Meter Number</label>
                    <select name="" id="">
                        <option value="">Choose your Disco</option>
                        <option value="aedc">Abuja Electricity Distribution Company (AEDC)</option>
                        <option value="bedc">Benin Electricity Distribution PLC(BEDC)</option>
                        <option value="bedc">Enugu Electricity Distribution Company(EEDC)</option>
                        <option value="bedc">Ibadan Electricity Distribution PLC(IBEDC)</option>
                        <option value="bedc">Ikeja Electric(IE)</option>
                    </select>
                </div>
                <div className="formGroup">
                    <label htmlFor="amount">Enter Amount</label>
                    <input type="text" name="" id="" placeholder='Amount'/>
                </div>
                <div className="formGroup">
                    <button>Continue</button>
                </div>
            </form>
        </div>
        <div className="buypower_header">
            <button>Dashboard</button>
        </div>
      </div>
    </div>
  )
}

export default BuyPower
