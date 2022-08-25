import { Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MenuButton from '../components/MenuButton';
import "../styles/home.css";


const Home = () => {
  return (
    <div className='home'>
      <Box sx={{ display: "flex", width: "100%",
      height: "25%", position: "fixed", top: 0, alignItems: "center",
       justifyContent: "space-between" }}>
        <img src="" alt="logo" style={{ marginLeft: "5em" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 3, marginRight: "5em" }}>
          <h3>English</h3>
          <MenuButton />
        </Box>
      </Box>
    </div>
  )
}

export default Home