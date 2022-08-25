import { Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MenuButton from '../components/MenuButton';
import "../styles/home.css";


const Home = () => {
  return (
    <div className='home'>
      {/* 1s viwport */}
      <Box id="viewport">
        {/* Header */}
        <Box sx={{ display: "flex", width: "100%",
        height: "25%", position: "fixed", top: 0, alignItems: "center",
        justifyContent: "space-between", backgroundColor: "transparent" }}>
          <img id="logo" src={require("../assets/white-logo.png")} alt="logo" style={{ marginLeft: "4em" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 5, marginRight: "4em" }}>
            <h3>English</h3>
            <MenuButton />
          </Box>
        </Box>
          {/* Main */}
          <Box sx={{ padding: "0 8em", display: "flex", marginTop: "15%" }}>
            <Box sx={{ width: "16rem" }} >
              <h1>Razak Pharmacy</h1>
              <h3>with more than half a century of experience</h3>
            </Box>
            <img src="" alt="" />
          </Box>
          {/* Footer */}
          <Box sx={{ padding: "0 8em", display: "flex", marginTop: "5%", gap: 1 }} >
          <img src={require("../assets/whatsapp.png")} alt="whatsapp" id="social-media" />
          <img src={require("../assets/instagram.png")} alt="instagram" id="social-media" />
          <img src={require("../assets/linkedin-in.png")} alt="linkedin" id="social-media" />
          </Box>

      </Box>
      
    </div>
  )
}

export default Home