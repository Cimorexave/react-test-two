import { Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import "../styles/welcome.css";
import logoSvg from "../assets/logo-svg.svg";
import ExploreButton from './ExploreButton';
import {motion} from "framer-motion";
import { exitContext } from '../utils/context';

const Welcome = () => {
  //states
  const {exit , setExit} = useContext(exitContext)

  //lifecycle management
  return (
    <div className='welcome'>
        <motion.img animate= {{ y: exit? -500 : 0 }} transition={{duration: 0.5}}
        src={require("../assets/blue-logo.png")} alt="blue-logo" id='logo' />
        <div style={{ position: "relative" }}>
          <h3 className='top-text'>Quality and oldness by</h3>
          <motion.img animate={{ scale: exit? 300 : 1 }}
           transition={{ duration: 1.5, delay: 0.5 }} src={logoSvg}
            alt="logo-svg" id='logo-svg'/>
          <h3 className='bottom-text'>Pharmaceutical company</h3>
        </div>
    </div>
  )
}

export default Welcome