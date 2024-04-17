import { Box, Typography } from '@mui/material';
import React from 'react';

const NotFound = () => {
  return (
    <Box>
      <Typography mt={5} variant="h5" color="error">
        Not Found Page... 
        <br/>
        <br/>
        Try Again Later...
      </Typography>
    </Box>
  );
}

export default NotFound;
