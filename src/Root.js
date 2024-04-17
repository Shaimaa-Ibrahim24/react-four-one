import React from 'react';
import {Outlet} from 'react-router-dom';
import Appbarro from './comp/Appbarro';
import Drawerr from './comp/Drawerr';
import { Box } from '@mui/material';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import getDesignTokens from './Style/Mytheme';


const Root = () => {
  const drawerWidth = 240;
  const [mode, setmymode] = useState(localStorage.getItem("currentMode")===null?"light":localStorage.getItem("currentMode")==="light"?"light":"dark");
  
  const [noneblock, setnoneblock] = useState("none");
  const [tempo, settempo] = useState("permanent");
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div>
    <Appbarro {...{drawerWidth,setnoneblock,settempo}}/>
    <Drawerr {...{drawerWidth,setmymode,noneblock,setnoneblock,tempo,settempo}}  />
    <Box sx={{ml:{sm:`${drawerWidth}px`},display:"flex",justifyContent:"center",mt:"60px"}}>
    <Outlet />
    </Box>
      
    </div>
    </ThemeProvider>
  );
}

export default Root;
