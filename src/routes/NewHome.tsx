import { Button, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';
import MenuButton from '../components/MenuButton';
import "../styles/home.css";
import {motion } from "framer-motion";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "../styles/newhome.css";

const NewHome = () => {
    //refs
    const carousel = useRef(null)
  return (
    <motion.div className='parent' exit={{ opacity: 0 }} transition={{ duration: 1 }}>
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
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}>
              With more than half a century of epxerience and best quality
            </motion.div>
            {/* footer */}
            <Box sx={{ color: "darkblue", position: "relative" }}>
              Click and Learn more <IconButton aria-label="more" sx={{ color: "black", border: "2px solid black", position: "absolute", right: 0, bottom: -10 }} ><KeyboardArrowRightIcon fontSize='small' /></IconButton>
            </Box>
          </Box>
          <Box id="text-box">
            <motion.div initial={{ opacity: 0, y: 10 }} transition={{ duration: 0.5, delay: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}>
              Razak laboratories Pharmaceutical joint stock company started it's actvity
              in 1343 Hijri (1964 AD) under the name of Pfizer Laboratories 
              joint stock company under the ownership of Pfizer America. 
            </motion.div>
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
            <motion.div initial={{ width: 0 }} whileInView={{ width: 900 }} 
             id="hr" transition={{ duration: 0.5, delay: 0.5 }} style={{ width: 0 }} />
            <motion.div initial={{ opacity: 0, y: 10 }} transition={{ duration: 0.5, delay: 1 }}
            whileInView={{ opacity: 1, y: 0 }}>
                <Box>Blogs</Box>
                <Box>News and Events</Box>
            </motion.div>
            {/* slider */}
            <motion.div className='carousel' ref={carousel}>
                <motion.div drag="x" dragConstraints={{ right: 100, left: -200 }} className='inner-carousel' whileDrag={{ cursor: "grabbing" }} >
                    <motion.img whileHover={{ scale: 1.2 }} className="slider-item" src={require("../assets/img 1.png")} alt="drug-picture" />
                    <motion.img whileHover={{ scale: 1.2 }} className="slider-item" src={require("../assets/img 2.png")} alt="drug-picture" />
                    <motion.img whileHover={{ scale: 1.2 }} className="slider-item" src={require("../assets/img 3.png")} alt="drug-picture" />
                    <motion.img whileHover={{ scale: 1.2 }} className="slider-item" src={require("../assets/img 4.png")} alt="drug-picture" />
                    <motion.img whileHover={{ scale: 1.2 }} className="slider-item" src={require("../assets/img 8.png")} alt="drug-picture" />
                    <motion.img whileHover={{ scale: 1.2 }} className="slider-item" src={require("../assets/img 9.png")} alt="drug-picture" />
                </motion.div>
            </motion.div>
            </Box>
        </motion.div>
        {/* 4th viewport  */}
        <motion.div className="viewport" initial={{ zoom: 1 }} exit={{ zoom: 1 }}
        whileInView={{ zoom: 1.1 }} transition={{ delay: 1, duration: 1 }}>
            <motion.div id="overlay" >
            </motion.div>
        </motion.div>
        {/* 5th viewport  */}
        <motion.div className="viewport">
            <Box sx={{ display: "grid", placeItems: "center", height: "100%" }}>
                <Box sx={{ fontSize: "xx-large" }}>
                    Don't<motion.img src={require("../assets/img 7.png")} alt="drugs"
                    initial={{ width: 0, height: 100 }} whileInView={{ width: 100 }} style={{ height: "auto" }}
                    transition={{ delay: 1, duration: 1 }} id="drugs-pics" /> you
                    <br/> follow<motion.img src={require("../assets/img 6.png")} alt="drugs" 
                    initial={{ width: 0, height: 100 }} whileInView={{ width: 100 }}
                    style={{ height: "auto" }} id="drugs-pics"
                    transition={{ delay: 1, duration: 1 }} /> us?
                </Box>
                <Box sx={{ position: "absolute", bottom: 50 }}>
                    Follow our instagram <IconButton aria-label="more" size='small' sx={{ color: "black", border: "2px solid black", position: "absolute", right: -50, bottom: -7.5 }} ><KeyboardArrowRightIcon fontSize='small' /></IconButton>
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
    </motion.div>
  )
}

export default NewHome