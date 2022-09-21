import React, {useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Products from './components/pages/products/Products';
import Contact from './components/pages/contact/Contact';
import Error from './components/pages/error/Error';

const App=()=> {
  return (
    
    <div>
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
