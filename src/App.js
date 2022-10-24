import React, {useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Products from './components/pages/products/Products';
import Contact from './components/pages/contact/Contact';
import Error from './components/pages/error/Error';
import Solution from './components/pages/solution/Solution';
import Merchants from './components/pages/merchants/Merchants';
import Blog from './components/pages/blog/Blog';
import Dashboard from './components/pages/dasboard/Dashboard';
import BuyPower from './components/pages/buypower/BuyPower';

const App=()=> {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if(spinner){
    setTimeout(()=>{
      spinner.style.display='none';
      setLoading(false);

    }, 3000)
  }
  return (
    !loading && (
      <div>
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/solution' element={<Solution/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/merchants' element={<Merchants/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/dashboard/buypower' element={<BuyPower/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </div>
    )
    
  );
}

export default App;
