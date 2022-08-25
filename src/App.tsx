//Imports
//React
import React from 'react';
//Styles
import './styles/app.css';
//Components & Routes
// import { Loading, Home } from './routes/index';
import Home from './routes/Home';
import Loading from './routes/Loading';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Menu from './routes/Menu';


function App() {
  //states

  //lifecycle management

  return (
    <div className='app'>
      <Router>
        <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Loading />} />
        <Route path='/menu' element={<Menu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
