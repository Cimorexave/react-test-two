import { Fab } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/explorebtn.css";
import {motion} from "framer-motion";

const ExploreButton: React.FC = () => {
    //Navigate
    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/home")
    }
  return (
    <motion.div drag style={{ zIndex: 10, position: "absolute", right: 15, top: -30 }} dragConstraints={{ right: 10, top: 10 }} >
      <Fab id="btn" aria-label='explore' onClick={handleClick} >
          <h5>
          Click To Explore
          </h5>
      </Fab>
    </motion.div>
  )
}

export default ExploreButton