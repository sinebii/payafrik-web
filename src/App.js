import './App.css';
import NavBar from './components/navbar/NavBar';
import Slider from './components/slider/Slider';
import About from './components/about/About';

const App=()=> {
  return (
    <div className="main_container">
      <NavBar/>
      <Slider/>
      <About/>

    </div>
  );
}

export default App;
