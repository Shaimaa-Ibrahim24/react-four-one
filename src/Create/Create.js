import { Box } from '@mui/material';
import './Create.css';
import {TextField,InputAdornment} from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { ChevronRight} from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: theme.palette.ali.main,
  '&:hover': {
    backgroundColor: theme.palette.ali.main,
  Scale:"0.92"
  },
}));
const Create = () => {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const navigate = useNavigate()
  
  return (
    <Box autoComplete='off' component="form" sx={{width:"380px"}}>
    <TextField
    onChange={(eo) => {
      settitle(eo.target.value)
    }}
    fullWidth
          label="Transaction Title"
          sx={{ mt: "22px", display:"block" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">&#128073;</InputAdornment>,
          }}
          variant="filled"
        />
    <TextField
      onChange={(eo) => {
        setprice(Number(eo.target.value))
      }}
    fullWidth
          label=" Amount"
          sx={{ mt: "22px", display:"block" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="filled"
        />
   <ColorButton onClick={() => {
    fetch("http://localhost:3100/mydata",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({title,price}),
    }).then(() => {
      navigate("/")
    })
   }} sx={{mt:"20px"}} variant="contained">Submit<ChevronRight/></ColorButton>
    </Box>
  );
}

export default Create;
