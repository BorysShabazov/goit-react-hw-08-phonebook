import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filteringContacts: (state, action) => action.payload,
  },
});

export const { filteringContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
