import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsStateReducer } from './contactsStateSlice';
import { filterReducer } from './filterSlice';

const rootReduser = combineReducers({
  contacts: contactsStateReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReduser,
});
