import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { personReducer } from './reducers/personSlice';
import { personsReducer } from './reducers/personsSlice';

const rootReducer = combineReducers({
  personReducer,
  personsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
