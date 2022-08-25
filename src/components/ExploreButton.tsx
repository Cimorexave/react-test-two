import { Fab } from '@mui/material';
import React from 'react';
import "../styles/explorebtn.css";

const ExploreButton: React.FC = () => {
  return (
    <Fab id="btn" aria-label='explore' >
        <h5>
        Click To Explore
        </h5>
    </Fab>
  )
}

export default ExploreButton