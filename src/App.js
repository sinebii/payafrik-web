import './App.css';
import NavBar from './components/navbar/NavBar';
import Slider from './components/slider/Slider';
import About from './components/about/About';
import Competencies from './components/competences/Competencies';
import Products from './components/products/Products';

const App=()=> {
  return (
    <div className="main_container">
      <NavBar/>
      <Slider/>
      <Competencies/>
      <About/>
      <Products/>

    </div>
  );
}

export default App;
