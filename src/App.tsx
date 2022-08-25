//Imports
//React
import React, {useState, useEffect} from 'react';
//Styles
import './styles/app.css';
//Components & Routes
// import { Loading, Home } from './routes/index';
import Home from './routes/Home';
import Loading from './routes/Loading';


function App() {
  //states
  //loading page state
  const [loading , setLoading] = useState<boolean>(true)

  //lifecycle management

  return (
    <div className='app'>
      {loading ? <Loading /> : <Home />}
    </div>
  );
}

export default App;
