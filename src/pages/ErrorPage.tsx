import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';

import theme from '../theme';

export const ErrorPage = ({ error }: { error?: string }) => {
  const navigate = useNavigate();

  return (
    <Grid
      alignItems='center'
      container
      direction='column'
      gap='16px'
      height='100%'
      justifyContent='center'
    >
      <Typography color={theme.palette.error.main} variant='h2'>
        Error: {error || 'Something wend wrong'}
      </Typography>
      <Grid alignItems='center' container gap='16px' justifyContent='center'>
        <Button color='primary' component={Link} to='/' variant='contained'>
          Back to main
        </Button>
        <Button color='primary' onClick={() => navigate(0)} variant='contained'>
          Refresh
        </Button>
      </Grid>
    </Grid>
  );
};
