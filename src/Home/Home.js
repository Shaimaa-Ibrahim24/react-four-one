import { Box, Paper, Typography, IconButton } from '@mui/material';
import './Home.css';
import { Close } from '@mui/icons-material';
import { useEffect,useState } from 'react';

const Home = () => {
  const [mydata, setmydata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3100/mydata")
    .then((response)=>response.json())
    .then((data)=>setmydata(data))
  },[])
let subtotal = 0;
  return (
    <Box>
    {mydata.map((item) => {
      subtotal += Number(item.price)
      return(
        <Paper key={item.id} sx={{width:"366px",display:"flex",justifyContent:"space-between",
  mt:"22px",pt:"27px",pb:"7px",position:"relative"}}>
      <Typography sx={{ml:"16px",fontSize:"1.3em"}} variant="h6" >{item.title}</Typography>
      <Typography sx={{mr:"16px",fontSize:"1.3em",fontWeight:500,opacity:"0.8"}} variant="h6" >${item.price}</Typography>
      <IconButton onClick={() => {
        fetch(`http://localhost:3100/mydata/${item.id}`,{method:"DELETE"})
        const delItem = mydata.filter((obj) => {
          return obj.id !== item.id
        })
        setmydata(delItem)
      }} sx={{position:"absolute",top:0,right:0}}>
        <Close fontSize='20px'/>
      </IconButton>
    </Paper>
      )
    })}
  <Typography align="center" mt={7} variant="h6" color="inherit">&#128073;You Spend ${subtotal}</Typography>
    </Box>
  );
}

export default Home;
