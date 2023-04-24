import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TextField } from '@mui/material';
import debounce from 'lodash.debounce';

import { useAppDispatch } from '../hooks/redux';
import { setPage, setSearch } from '../store/reducers/personsSlice';

export const SearchInput = () => {
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get('search');

  const [inputValue, setInputValue] = useState(searchValue || '');

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      if (!value) {
        searchParams.delete('search');
      } else {
        dispatch(setPage(1));

        searchParams.set('page', '1');
        searchParams.set('search', value);
      }

      setInputValue(value);
      setSearchParams(searchParams);
    },
    [dispatch, searchParams, setSearchParams],
  );

  const debouncedSearch = useMemo(
    () =>
      debounce((value) => {
        dispatch(setSearch(value));
      }, 400),
    [dispatch],
  );

  useEffect(() => {
    debouncedSearch(inputValue);
  }, [inputValue, debouncedSearch]);

  return (
    <TextField
      label='Search field'
      onChange={handleSearch}
      type='search'
      value={inputValue}
    />
  );
};
