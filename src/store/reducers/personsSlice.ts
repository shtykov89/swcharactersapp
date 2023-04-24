import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPeople } from '../../types';
import { createQueryString } from '../../utils';

type PersonsResponse = {
  count: number;
  personsList: IPeople[];
};

type FetchPersonProps = {
  page: number;
  search?: string;
};

export interface PersonsState {
  count?: number;
  error?: string;
  loading: boolean;
  page: number;
  personsList: IPeople[];
  search: string;
}

const initialState: PersonsState = {
  count: undefined,
  error: undefined,
  loading: false,
  page: 1,
  personsList: [],
  search: '',
};

export const fetchPersons = createAsyncThunk<PersonsResponse, FetchPersonProps>(
  'fetchPersons',
  async ({ page, search }: FetchPersonProps) => {
    const query = createQueryString(page, search);

    const response = await fetch(`https://swapi.dev/api/people/${query}`);
    const persons = await response.json();

    return { count: persons.count, personsList: persons.results };
  },
);

const personsSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(fetchPersons.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchPersons.fulfilled,
      (state, action: PayloadAction<PersonsResponse>) => {
        state.loading = false;
        state.personsList = action.payload.personsList;
        state.count = action.payload.count;
        state.error = undefined;
      },
    );
    builder.addCase(fetchPersons.rejected, (state, action) => {
      state.loading = false;
      state.personsList = [];
      state.error = action.error.message;
    });
  },
  initialState,
  name: 'persons',
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { setPage, setSearch } = personsSlice.actions;

export const personsReducer = personsSlice.reducer;
