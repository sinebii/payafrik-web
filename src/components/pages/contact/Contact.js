import React from 'react'
import Nav from '../nav/Nav';
import BreadCrumb from '../../breadcrumb/BreadCrumb';
import './Contact.css';
import MainContact from './MainContact';
import Footer from '../footer/Footer';

const Contact = () => {
    const breadcrumb = {
        title:"CONTACT US",
        subTitle:"We will love to here from you."
    }
  return (
    <div className='contact_container'>
        <Nav/>
        <BreadCrumb breadcrumb={breadcrumb}/>
        <MainContact/>
        <Footer/>

    </div>
  )
}

export default Contact
