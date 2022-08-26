import { Button, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MenuButton from '../components/MenuButton';
import "../styles/home.css";
import {motion } from "framer-motion";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "../styles/newhome.css";

const NewHome = () => {
  return (
    <div className='parent'>
        {/* 1st viewport */}
        <motion.div className="viewport" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            {/* Header */}
        <div className="header">
            <img id="logo" src={require("../assets/white-logo.png")} alt="logo" style={{ marginLeft: "4em" }} />
            <div style={{ marginRight: "4em", display: "flex", alignItems: "center",
            gap: "2em" }}>
                <h3>English</h3>
                <MenuButton />
            </div>
        </div>
          {/* Main */}
          <Box sx={{ padding: "0 8em", display: "flex", marginTop: "7%" }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2 }} style={{ width: "36rem", position: "relative", fontSize: "larger" }} >
              <h1>Razak Pharmacy</h1>
              <h3>with more than half a century of<br /> experience</h3>
              <IconButton aria-label="more" sx={{ color: "white", border: "2px solid white", position: "absolute", right: 100, bottom: -10 }} ><KeyboardArrowRightIcon fontSize='large' /></IconButton>
            </motion.div>
            <img src="" alt="" />
          </Box>
          {/* Footer */}
          <Box sx={{ padding: "0 8em", display: "flex", marginTop: "5%", gap: 1 }} >
          <img src={require("../assets/whatsapp.png")} alt="whatsapp" id="social-media" />
          <img src={require("../assets/instagram.png")} alt="instagram" id="social-media" />
          <img src={require("../assets/linkedin-in.png")} alt="linkedin" id="social-media" />
          </Box>
        </motion.div>
        {/* 2nd viewport  */}
        <motion.div className="viewport">
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
        </motion.div>
        {/* 3rd viewport  */}
        <motion.div className="viewport">
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
        </motion.div>
        {/* 4th viewport  */}
        <motion.div className="viewport"></motion.div>
        {/* 5th viewport  */}
        <motion.div className="viewport">
            <Box sx={{ display: "grid", placeItems: "center", height: "100%" }}>
                <Box>
                    Don't<img src="" alt="" /> you<br/> follow<img src="" alt="" /> us?
                </Box>
                <Box sx={{ position: "absolute" }}>
                    Follow our instagram 
                </Box>
            </Box>
        </motion.div>
        {/* 6th viewport  */}
        <motion.div className="viewport">
            <Box sx={{ display: "flex" }} >

            </Box>
            <Box>
            @2021 Razak Pharmacy. All rights reserved.
            </Box>
        </motion.div>
    </div>
  )
}

export default NewHome