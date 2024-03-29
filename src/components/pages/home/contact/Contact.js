import React from 'react'
import './Contact.css';
import { FaAngleDoubleRight } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contact_home' id='contact'>
      <div className="contact_content">
        <div className="contact_title">
            <p>Contact us now</p>
        </div>
        <div className="contact_sub_title">
            <p>Request a free <br></br>consultation with us</p>
        </div>
        <div className="contact_txt_content">
            <p>When you’re ready to get started, we’re ready to help. Our team is here to provide the products, solutions, and services you need.</p>
        </div>

      </div>
      <div className="contact_form">

        <form action="">
            <div className="form_group">
                <input type="text" name="" id=""  placeholder='Firstname'/>
                <input type="text" name="" id=""  placeholder='Lastname'/>
            </div>
            <div className="form_group">
                <input type="email" name="" id=""  placeholder='Email'/>
            </div>
            <div className="form_group">
                <textarea name="" id="" cols="30" rows="6" placeholder='Message'></textarea>
            </div>
            <div className="form_group">
                <button><FaAngleDoubleRight/> Send Message</button>
            </div>
           

        </form>

      </div>
    </div>
  )
}

export default Contact
