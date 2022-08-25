import { Fab } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/explorebtn.css";

const ExploreButton: React.FC = () => {
    //Navigate
    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/home")
    }
  return (
    <Fab id="btn" aria-label='explore' onClick={handleClick} >
        <h5>
        Click To Explore
        </h5>
    </Fab>
  )
}

export default ExploreButton