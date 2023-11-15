import { useEffect } from 'react';
import AllRoute from './AllRoutes/AllRoute';
import './App.css';
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('G-TWK62TEZM1');

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
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
