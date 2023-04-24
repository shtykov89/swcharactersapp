import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Button, Dialog, DialogTitle, Grid, Typography } from '@mui/material';

import { EditPersonForm } from '../components/EditPersonForm';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchPerson, setPerson } from '../store/reducers/personSlice';
import { IPeople } from '../types';
import { getPersonId, getPersonShortInfo, getTitleFromKey } from '../utils';
import { ErrorPage } from './ErrorPage';
import { LoadingPage } from './LoadingPage';

export const PersonPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const id = searchParams.get('id');
  const { page, personsList } = useAppSelector((state) => state.personsReducer);

  const { error, loading, person } = useAppSelector(
    (state) => state.personReducer,
  );

  useEffect(() => {
    if (!id) {
      navigate('/');
    } else {
      const currentPerson = personsList.find(
        (item: IPeople) => getPersonId(item.url) === id,
      );

      if (!currentPerson) {
        dispatch(fetchPerson(id));
      } else {
        const shortPerson = getPersonShortInfo(currentPerson);
        dispatch(setPerson(shortPerson));
      }
    }
  }, [dispatch, id, navigate, personsList]);

  if (error) {
    return <ErrorPage error={error} />;
  }

  if (loading || !person) {
    return <LoadingPage />;
  }

  return (
    <>
      <Dialog open={isDialogOpen}>
        <DialogTitle>Edit character info</DialogTitle>
        <EditPersonForm defaultValues={person} onClose={handleCloseDialog} />
      </Dialog>
      <Grid
        alignItems='baseline'
        container
        direction='column'
        gap='16px'
        justifyContent='flex-start'
      >
        <Typography variant='h4'>{person.name}</Typography>
        <Button component={Link} sx={{ padding: '0' }} to={`/?page=${page}`}>
          Back to main
        </Button>
        <Grid container direction='column' gap='4px'>
          {Object.entries(person).map(([key, value]) => (
            <Grid key={key} container gap='4px'>
              <Typography>{getTitleFromKey(key)}:</Typography>
              <Typography>{value}</Typography>
            </Grid>
          ))}
        </Grid>
        <Button color='primary' onClick={handleOpenDialog} variant='contained'>
          Edit
        </Button>
      </Grid>
    </>
  );
};
