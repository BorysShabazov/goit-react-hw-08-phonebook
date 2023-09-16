import { createSlice } from '@reduxjs/toolkit';
import { createContact, fetchContacts, deleteContact } from './operations';

const initialContacts = { items: [], isLoading: false, error: null };

const rejectFunc = (state, action) => {
  return {
    items: state.items,
    isLoading: false,
    error: action.payload,
  };
};
const pendingFunc = state => {
  return {
    items: state.items,
    isLoading: true,
    error: null,
  };
};

const contactsStateSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,

  extraReducers: builder => {
    // fetch

    builder.addCase(fetchContacts.pending, pendingFunc);
    builder.addCase(fetchContacts.fulfilled, (_, action) => {
      return {
        items: [...action.payload],
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(fetchContacts.rejected, rejectFunc);

    // create

    builder.addCase(createContact.pending, pendingFunc);
    builder.addCase(createContact.fulfilled, (state, action) => {
      return {
        items: [...state.items, action.payload],
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(createContact.rejected, rejectFunc);

    // delete

    builder.addCase(deleteContact.pending, pendingFunc);
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      return {
        items: [...state.items.filter(el => el.id !== action.payload)],
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(deleteContact.rejected, rejectFunc);
  },
});

export const contactsStateReducer = contactsStateSlice.reducer;
export const { filteringContacts } = contactsStateSlice.actions;
