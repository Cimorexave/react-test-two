import { Button, Link } from '@mui/material';
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
        height: "25%", position: "absolute", top: 0, alignItems: "center",
        justifyContent: "space-between", backgroundColor: "transparent" }}>
          <img id="logo" src={require("../assets/white-logo.png")} alt="logo" style={{ marginLeft: "4em" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 5, marginRight: "4em" }}>
            <h3>English</h3>
            <MenuButton />
          </Box>
        </Box>
          {/* Main */}
          <Box sx={{ padding: "0 8em", display: "flex", marginTop: "15%" }}>
            <Box id="text-box" >
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

      {/* 2nd viewport */}
      <Box id="viewport" sx={{ color: "black" }} >
        <Box sx={{ display: "flex", gap: "5em" }} >
          <Box id="text-box">
            <Box>About Razak</Box>
            <Box>
              With more than half a century of epxerience and best quality
            </Box>
            {/* footer */}
            <Box>
              Click and Learn more #icon
            </Box>
          </Box>
          <Box id="text-box">
            <Box>
              Razak laboratories Pharmaceutical joint stock company started it's actvity
              in 1343 Hijri (1964 AD) under the name of Pfizer Laboratories 
              joint stock company under the ownership of Pfizer America. 
            </Box>
            {/* footer */}
            <Box>
              <Button >Product</Button>
              <Button >Contact</Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* 3rd viewport */}
      <Box id="viewport" sx={{ position: "relative" }}>
        <div className="blue"></div>
        <Box sx={{ display: "flex", flexDirection: "column",
         gap: 5, alignItems: "left", marginLeft: "8em", marginTop: "8em" }} >
          <div id="hr" />
          <Box>
            <Box>Blogs</Box>
            <Box>News and Events</Box>
          </Box>
          {/* slider */}

        </Box>
      </Box>

      {/* 4th viewport  */}
      <Box id="viewport" >
      
      </Box>
      
    </div>
  )
}

export default Home