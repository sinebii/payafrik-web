import React from 'react';
import Nav from '../nav/Nav';
import BreadCrumb from '../breadcrumb/BreadCrumb';

const Products = () => {
    const breadcrumb = {
        title:"PRODUCTS",
        subTitle:"We will love to here from you."
    }
  return (
    <div>
        <Nav/>
        <BreadCrumb breadcrumb={breadcrumb}/>
      <h1>Products</h1>
    </div>
  )
}

export default Products
