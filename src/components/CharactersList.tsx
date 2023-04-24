import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from '@mui/material';

import { ErrorPage } from '../pages/ErrorPage';
import { LoadingPage } from '../pages/LoadingPage';

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchPersons } from '../store/reducers/personsSlice';
import { IPeople } from '../types';
import { getPersonId } from '../utils';

export const CharactersList = () => {
  const dispatch = useAppDispatch();

  const { page, search } = useAppSelector((state) => state.personsReducer);

  useEffect(() => {
    dispatch(fetchPersons({ page, search }));
  }, [dispatch, page, search]);

  const { error, loading, personsList } = useAppSelector(
    (state) => state.personsReducer,
  );

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  if (search && personsList && personsList.length === 0) {
    return (
      <Grid alignItems='center' container gap='16px' justifyContent='center'>
        <Typography variant='h4'>Not found</Typography>
      </Grid>
    );
  }

  return (
    <List disablePadding sx={{ minHeight: '400px' }}>
      {personsList?.map((person: IPeople) => (
        <ListItem key={person.name} disablePadding>
          <ListItemButton
            component={Link}
            to={`/person?id=${getPersonId(person.url)}`}
          >
            {person.name}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
