import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Link } from '@mui/material';


const Appbarro = ({drawerWidth,setnoneblock,settempo}) => {
  return (
    <AppBar   sx={{ width: {sm:`calc(100% - ${drawerWidth}px)`}, ml: {sm:`${drawerWidth}px` }}} position="static">
        <Toolbar>
          <IconButton
          onClick={() => {
            settempo("temporary")
            setnoneblock("block")
          }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 , display:{xs:"block",sm:"none"}}}
          >
            <MenuIcon />
          </IconButton>
          <Link sx={{ flexGrow: 1, color:"white", textDecoration:"none","&:hover": {fontSize:"17px"} }} href="/">
          My Expenses
          </Link>
          
          <Typography mr={1} variant="body1" >Shaimaa Ibrahim</Typography>
          <Avatar src="./imgs/shaimaa.jpg"/>
        </Toolbar>
      </AppBar>
  );
}

export default Appbarro;
