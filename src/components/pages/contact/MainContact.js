import React from 'react';

const MainContact = () => {
  return (
    <div className='contact_contact_main'>
      <div className="main_contact_form">
            <div className="title">
                <p>We Love to Hear From You</p>
                <p>Please call or email contact form and we will be happy to assist you.</p>
            </div>
            <div className="contact_form_container">
               <form action="">
                <div className="form_group">
                    <input type="text" name="" id="" placeholder='First Name'/>
                    <input type="text" name="" id="" placeholder='Last Name'/>
                </div>
                <div className="form_group">
                    <input type="email" name="" id="" placeholder='Email'/>
                </div>
                <div className="form_group">
                    <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                </div>
                <div className="form_group">
                    <button>Send Message</button>
                </div>
               </form>
            </div>
      </div>
      <div className="contact_address">
        <div className="title">
            <p>Our office address</p>
        </div>
        <div className="address">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima beatae, quisquam blanditiis dolor sapiente veniam?</p>
        </div>
        <div className="title">
            <p>Talk to us</p>
        </div>
        <div className="address">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, laudantium?</p>
        </div>
      </div>
    </div>
  )
}

export default MainContact
