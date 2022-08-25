import { Box, Fab } from '@mui/material';
import React from 'react';
import MenuButton from '../components/MenuButton';
import "../styles/menu.css";
import menuIconSvg from "../assets/menu-icon.svg";


const Menu = () => {
  return (
    <Box id="viewport-menu" >
      {/* Header */}
      <Box sx={{ display: "flex", width: "100%",
        height: "20%", position: "absolute", top: 0, alignItems: "center",
        justifyContent: "space-between", backgroundColor: "transparent" }}>
          <img id="logo" src={require("../assets/white-logo.png")} alt="logo" style={{ marginLeft: "4em" }} />
          {/* menu button  */}
          <img src={menuIconSvg} alt="menu-icon" id='menu-icon-svg' />
        </Box>
          {/* Main menu */}
        <Box id="main">
          {/* menu  */}
          <Box id="menu">

          </Box>
          {/* image  */}
          <Box>

          </Box>
        </Box>
          {/* Footer */}
          <Box>
            Sharing is Caring
          </Box>

    </Box>
  )
}

export default Menu