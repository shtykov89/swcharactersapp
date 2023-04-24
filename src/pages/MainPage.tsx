import React from 'react';
import { Grid, Typography } from '@mui/material';

import { CharactersList, Pagination, SearchInput } from '../components';

export const MainPage = () => (
  <Grid container direction='column' gap='16px' justifyContent='flex-start'>
    <Typography variant='h3'>StarWars characters list</Typography>
    <SearchInput />
    <CharactersList />
    <Pagination />
  </Grid>
);
