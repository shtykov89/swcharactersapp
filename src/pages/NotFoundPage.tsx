import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';

export const NotFoundPage = () => {
  return (
    <Grid
      alignItems='center'
      container
      direction='column'
      gap='16px'
      height='100%'
      justifyContent='center'
    >
      <Typography variant='h2'>Page not found</Typography>
      <Button color='primary' component={Link} to='/' variant='contained'>
        Back to main
      </Button>
    </Grid>
  );
};
