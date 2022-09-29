import React from 'react';
import './BreadCrumb.css';

const BreadCrumb = (props) => {
  return (
    <div className='bread_crumb'>
        <div className="breadcrumb_left">
            <p>{props.breadcrumb.title}</p>
            <p>{props.breadcrumb.subTitle}</p>
        </div>
    </div>
  )
}

export default BreadCrumb
