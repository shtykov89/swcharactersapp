import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PersonShortInfo } from '../../types';
import { getPersonShortInfo } from '../../utils';

export interface PersonState {
  error?: string;
  loading: boolean;
  person: PersonShortInfo | null;
}

const initialState: PersonState = {
  error: undefined,
  loading: false,
  person: null,
};

export const fetchPerson = createAsyncThunk<PersonShortInfo, string>(
  'fetchPerson',
  async (id: string) => {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    const person = await response.json();

    return getPersonShortInfo(person);
  },
);

const personSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(fetchPerson.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchPerson.fulfilled,
      (state, action: PayloadAction<PersonShortInfo>) => {
        state.loading = false;
        state.person = action.payload;
        state.error = undefined;
      },
    );
    builder.addCase(fetchPerson.rejected, (state, action) => {
      state.loading = false;
      state.person = null;
      state.error = action.error.message;
    });
  },
  initialState,
  name: 'person',
  reducers: {
    setPerson(state, action: PayloadAction<PersonShortInfo>) {
      state.person = action.payload;
    },
  },
});

export const { setPerson } = personSlice.actions;

export const personReducer = personSlice.reducer;
