import React, { useCallback, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Pagination as MUIPagination } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setPage } from '../store/reducers/personsSlice';
import { getPagesNumber } from '../utils';

const DEFAULT_PAGE_SIZE = 10;

export const Pagination = () => {
  const { count } = useAppSelector((state) => state.personsReducer);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page');

  const currentPage = useMemo(() => {
    if (!page || Number.isNaN(Number(page))) {
      return 1;
    }

    return Number(page);
  }, [page]);

  useEffect(() => {
    dispatch(setPage(currentPage));

    searchParams.set('page', currentPage.toString());
    setSearchParams(searchParams);
  }, [dispatch, currentPage, searchParams, setSearchParams]);

  const pagesCount = useMemo(() => {
    if (!count) return 0;

    return getPagesNumber(count, DEFAULT_PAGE_SIZE);
  }, [count]);

  const onPageChange = useCallback(
    (_: unknown, newPage: number) => {
      searchParams.set('page', newPage.toString());
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  if (!pagesCount) return null;

  return (
    <MUIPagination
      count={pagesCount}
      onChange={onPageChange}
      page={currentPage}
    />
  );
};
