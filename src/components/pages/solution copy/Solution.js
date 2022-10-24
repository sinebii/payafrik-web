import React from 'react';
import Nav from '../nav/Nav';
import BreadCrumb from '../../breadcrumb/BreadCrumb';

const Solution = () => {
    const breadcrumb = {
        title:"SOLUTION",
        subTitle:"Our Solutions..."
    }
  return (
    <div>
        <Nav/>
        <BreadCrumb breadcrumb={breadcrumb}/>
      <h1>Solution</h1>
    </div>
  )
}

export default Solution
