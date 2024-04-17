import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import Person2Icon from '@mui/icons-material/Person2';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';


const myList = [
  {text:"Home",icon:<HomeIcon/>,route:"/"},
  {text:"Create",icon:<CreateIcon/>,route:"/create"},
  {text:"Profile",icon:<Person2Icon/>,route:"/profile"},
  {text:"Settings",icon:<SettingsIcon/>,route:"/settings"},
]
const Drawerr = ({drawerWidth,setmymode,noneblock,setnoneblock,tempo,settempo}) => {
  const navigate = useNavigate()
const theme = useTheme()
const location = useLocation()
  return (
    <Drawer
        sx={{
          display:{xs:noneblock,sm:"block"},
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant={tempo}
        anchor="left"
        open={true}
        onClose={() => {
          setnoneblock("none")
          settempo("permanent")
        }}
      >
    
      
        <List>
          <ListItem sx={{display:"flex",justifyContent:"center",mb:"10px" }} disablePadding>
          <IconButton onClick={() => {
            localStorage.setItem("currentMode",theme.palette.mode === "light"?"dark":"light")
            setmymode(theme.palette.mode === "light"?"dark":"light")
          }}   color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon sx={{color:"orange"}}  /> : <Brightness4Icon />}
      </IconButton>
          </ListItem>
          <Divider />
          {myList.map((item) => {
            return(
              <ListItem sx={{bgcolor:location.pathname === item.route?theme.palette.favColor.main:null}} onClick={() => {
                navigate(item.route)
              }} key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
            )
          })}
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <LogoutIcon/>
                </ListItemIcon>
                <ListItemText primary="Log-Out" />
              </ListItemButton>
            </ListItem>
        </List>
        
      </Drawer>
  );
}

export default Drawerr;
