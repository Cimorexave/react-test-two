import { Button } from '@mui/material';
import React from 'react';
import "../styles/welcome.css";

const Welcome = () => {
  return (
    <div className='welcome'>
        <img src={require("../assets/blue-logo.png")} alt="logo" id='logo' />
        <h3>Quality and oldness by</h3>
        <img src="../assets/logo-svg.svg" alt="logo" />
        <h3>Pharmaceutical company</h3>
        <Button />
    </div>
  )
}

export default Welcome