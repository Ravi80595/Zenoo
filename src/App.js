import { useEffect } from 'react';
import AllRoute from './AllRoutes/AllRoute';
import './App.css';
import ReactGA from 'react-ga';
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  ReactGA.initialize('G-GC3ESPNMS6');

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
    });
  }, []);


return (
    <div className='MainBox'>
      <div>
      <AllRoute />
      </div>
    </div>
  );
}

export default App;
