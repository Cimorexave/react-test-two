import { Box, Button, Collapse, Fab } from '@mui/material';
import React, {useState} from 'react';
import MenuButton from '../components/MenuButton';
import "../styles/menu.css";
import menuIconSvg from "../assets/menu-icon.svg";


const Menu = () => {
  const [firstSubmenu, setFirstSubmenu] = useState<boolean>(false)
  const [secondSubmenu, setSecondSubmenu] = useState<boolean>(false)
  const [thirdSubmenu, setThirdSubmenu] = useState<boolean>(false)
  const [fourthSubmenu, setFourthSubmenu] = useState<boolean>(false)

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
            <Button onClick={() => { setFirstSubmenu(firstSubmenu => !firstSubmenu) }} >About Us</Button>
            <Collapse in={firstSubmenu} >
              <Box>Submenu 1</Box>
              <Box>Submenu 2</Box>
              <Box>Submenu 3</Box>
            </Collapse>
            <Button onClick={() => { setSecondSubmenu(secondSubmenu => !secondSubmenu) }} >Product</Button>
            <Collapse in={secondSubmenu} >
              <Box>Submenu 1</Box>
              <Box>Submenu 2</Box>
              <Box>Submenu 3</Box>
            </Collapse>
            <Button onClick={() => { setThirdSubmenu(thirdSubmenu => !thirdSubmenu) }} >News and Events</Button>
            <Collapse in={thirdSubmenu} >
              <Box>Submenu 1</Box>
              <Box>Submenu 2</Box>
              <Box>Submenu 3</Box>
            </Collapse>
            <Button onClick={() => { setFourthSubmenu(fourthSubmenu => !fourthSubmenu) }} >Contact Us</Button>
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
          <Box>
            Sharing is Caring
          </Box>

    </Box>
  )
}

export default Menu