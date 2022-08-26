import { Box, Button, Collapse, Fab, IconButton } from '@mui/material';
import React, {useState} from 'react';
import "../styles/menu.css";
import menuIconSvg from "../assets/menu-icon.svg";
import {motion} from "framer-motion";
import { useNavigate } from 'react-router-dom';


const Menu = () => {
  const [firstSubmenu, setFirstSubmenu] = useState<boolean>(false)
  const [secondSubmenu, setSecondSubmenu] = useState<boolean>(false)
  const [thirdSubmenu, setThirdSubmenu] = useState<boolean>(false)
  const [fourthSubmenu, setFourthSubmenu] = useState<boolean>(false)

  let navigate = useNavigate()

  return (
    <motion.div id="viewport-menu" 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
        {/* Header */}
        <Box sx={{ display: "flex", width: "100%",
        height: "20%", position: "absolute", top: 0, alignItems: "center",
        justifyContent: "space-between", backgroundColor: "transparent" }}>
          <img id="logo" src={require("../assets/white-logo.png")} alt="logo" style={{ marginLeft: "4em" }} />
          {/* menu button  */}
          <IconButton id="icon-btn" size="small" onClick={() => {navigate("/newhome")}} ><img src={menuIconSvg} alt="menu-icon" id='menu-icon-svg' /></IconButton>
        </Box>
          {/* Main menu */}
        <Box id="main">
          {/* menu  */}
          <Box id="menu">
            <motion.div initial={{ opacity: 0, top: 100 }} animate={{ top: 0, opacity: 1}} transition= {{ delay: 0.5, duration: 0.5 }} >
              <Button id="menu-button" size='large' onClick={() => { setFirstSubmenu(firstSubmenu => !firstSubmenu) }} >About Us</Button>
            </motion.div>
            <Collapse in={firstSubmenu} >
              <Box>Submenu 1</Box>
              <Box>Submenu 2</Box>
              <Box>Submenu 3</Box>
            </Collapse>
            <motion.div initial={{ opacity: 0, top: 10 }} animate={{ top: 0, opacity: 1}} transition= {{ delay: 1, duration: 0.5 }}>
              <Button id="menu-button" onClick={() => { setSecondSubmenu(secondSubmenu => !secondSubmenu) }} >Product</Button>
            </motion.div>
            <Collapse in={secondSubmenu} >
              <Box>Submenu 1</Box>
              <Box>Submenu 2</Box>
              <Box>Submenu 3</Box>
            </Collapse>
            <motion.div initial={{ opacity: 0, top: 100 }} animate={{ top: 0, opacity: 1}} transition= {{ delay: 1.5, duration: 0.5 }}>
              <Button id="menu-button" onClick={() => { setThirdSubmenu(thirdSubmenu => !thirdSubmenu) }} >News and Events</Button>
            </motion.div>
            <Collapse in={thirdSubmenu} >
              <Box>Submenu 1</Box>
              <Box>Submenu 2</Box>
              <Box>Submenu 3</Box>
            </Collapse>
            <motion.div initial={{ opacity: 0, top: 100 }} animate={{ top: 0, opacity: 1}} transition= {{ delay: 2, duration: 0.5 }}>
              <Button id="menu-button" onClick={() => { setFourthSubmenu(fourthSubmenu => !fourthSubmenu) }} >Contact Us</Button>
            </motion.div>
            <Collapse in={fourthSubmenu} >
              <Box>Submenu 1</Box>
              <Box>Submenu 2</Box>
              <Box>Submenu 3</Box>
            </Collapse>
          </Box>
          {/* image  */}
          <Box>

          </Box>
        </Box>
          {/* Footer */}
          <Box sx={{ marginTop: "2em", marginLeft: "2em" }}>
            Sharing is Caring
          </Box>

    </motion.div>
  )
}

export default Menu