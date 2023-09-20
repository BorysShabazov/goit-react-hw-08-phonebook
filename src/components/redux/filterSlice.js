import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { filter: '', modalIsOpen: false, changeUser: {} };

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filteringContacts: (state, action) => ({
      filter: action.payload,
      modalIsOpen: state.modalIsOpen,
      changeUser: state.changeUser,
    }),
    openModal: (state, action) => ({
      filter: state.filter,
      modalIsOpen: true,
      changeUser: action.payload,
    }),
    closeModal: (state, action) => ({
      filter: state.filter,
      modalIsOpen: false,
      changeUser: state.changeUser,
    }),
    changeName: (state, action) => ({
      filter: state.filter,
      modalIsOpen: true,
      changeUser: { ...state.changeUser, name: action.payload },
    }),
    changeNumber: (state, action) => ({
      filter: state.filter,
      modalIsOpen: true,
      changeUser: { ...state.changeUser, number: action.payload },
    }),
  },
});

export const {
  filteringContacts,
  openModal,
  closeModal,
  changeName,
  changeNumber,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
