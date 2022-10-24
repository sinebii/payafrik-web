import React from 'react';
import Nav from '../nav/Nav';
import BreadCrumb from '../../breadcrumb/BreadCrumb';

const Merchants = () => {
    const breadcrumb = {
        title:"MERCHANTS",
        subTitle:"Merchants..."
    }
  return (
    <div>
        <Nav/>
        <BreadCrumb breadcrumb={breadcrumb}/>
      <h1>Merchants</h1>
    </div>
  )
}

export default Merchants
