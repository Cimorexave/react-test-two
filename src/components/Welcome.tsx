import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import "../styles/welcome.css";
import logoSvg from "../assets/logo-svg.svg";
import ExploreButton from './ExploreButton';
import {motion} from "framer-motion";

const Welcome = () => {
  //states
  const [exit , setExit] = useState<boolean>(false)

  //lifecycle management
  useEffect(() => {
    setTimeout(() => {setExit(true)}, 5000)
  }, [])
  return (
    <div className='welcome'>
        <motion.img animate= {{ y: exit? -100 : 0 }} transition={{duration: 1}}
        src={require("../assets/blue-logo.png")} alt="blue-logo" id='logo' />
        <div style={{ position: "relative" }}>
          <h3 className='top-text'>Quality and oldness by</h3>
          <motion.img animate={{ scale: exit? 200 : 1 }}
           transition={{ duration: 1.5 }} src={logoSvg}
            alt="logo-svg" id='logo-svg'/>
          <h3 className='bottom-text'>Pharmaceutical company</h3>
        </div>
    </div>
  )
}

export default Welcome