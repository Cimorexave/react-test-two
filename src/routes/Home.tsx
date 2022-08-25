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
       justifyContent: "space-between", backgroundColor: "transparent" }}>
        <img id="logo" src={require("../assets/white-logo.png")} alt="logo" style={{ marginLeft: "4em" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 5, marginRight: "4em" }}>
          <h3>English</h3>
          <MenuButton />
        </Box>
      </Box>
    </div>
  )
}

export default Home