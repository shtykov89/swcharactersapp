import React from 'react';
import { CircularProgress, Grid } from '@mui/material';

export const LoadingPage = () => {
  return (
    <Grid alignItems='center' container height='400px' justifyContent='center'>
      <CircularProgress size={100} />
    </Grid>
  );
};
