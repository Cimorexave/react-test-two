import { Button } from '@mui/material';
import React from 'react';
import "../styles/welcome.css";
import logoSvg from "../assets/logo-svg.svg";

const Welcome = () => {
  return (
    <div className='welcome'>
        <img src={require("../assets/blue-logo.png")} alt="blue-logo" id='logo' />
        <div className="center-text">
          <h3>Quality and oldness by</h3>
          <img src={logoSvg} alt="logo-svg" id='logo-svg'/>
          <h3>Pharmaceutical company</h3>
        </div>
        <Button />
    </div>
  )
}

export default Welcome