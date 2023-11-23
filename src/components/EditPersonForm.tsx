import React, { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Box, Button, Grid, TextField } from '@mui/material';

import { useAppDispatch } from '../hooks/redux';
import { setPerson } from '../store/reducers/personSlice';
import { PersonShortInfo } from '../types';
import { getTitleFromKey } from '../utils';

type EditFormProps = {
  defaultValues: PersonShortInfo;
  onClose: () => void;
};

export const EditPersonForm = ({ defaultValues, onClose }: EditFormProps) => {
  const { control, handleSubmit } = useForm<PersonShortInfo>({ defaultValues });

  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    (formValues: PersonShortInfo) => {
      dispatch(setPerson(formValues));
      onClose();
    },
    [dispatch, onClose],
  );

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      sx={{ padding: '16px', width: '400px' }}
    >
      <Grid
        alignItems='baseline'
        container
        direction='column'
        gap='16px'
        justifyContent='flex-start'
      >
        {Object.keys(defaultValues).map((fieldName) => {
          return (
            <Controller
              key={fieldName}
              control={control}
              name={fieldName as keyof PersonShortInfo}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  error={!!error}
                  fullWidth
                  helperText={error ? 'Required' : ''}
                  label={getTitleFromKey(field.name)}
                  variant='outlined'
                />
              )}
              rules={{
                required: true,
              }}
            />
          );
        })}
        <Grid container gap='8px'>
          <Button onClick={onClose}>Cancel</Button>
          <Button type='submit'>Submit</Button>
        </Grid>
      </Grid>
    </Box>
  );
};
