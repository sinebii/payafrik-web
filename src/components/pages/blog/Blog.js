import React from 'react';
import Nav from '../nav/Nav';
import BreadCrumb from '../../breadcrumb/BreadCrumb';

const Blog = () => {
    const breadcrumb = {
        title:"Blog",
        subTitle:"From our blog..."
    }
  return (
    <div>
        <Nav/>
        <BreadCrumb breadcrumb={breadcrumb}/>
      <h1>Blog</h1>
    </div>
  )
}

export default Blog
