import { createSlice } from '@reduxjs/toolkit';
import { createUser, loginUser, logoutUser } from './operations';

const initialContacts = { user: null, error: null, isLoading: false };

const rejectFunc = (state, action) => {
  return {
    user: state.user,
    isLoading: false,
    error: action.payload,
  };
};
const pendingFunc = state => {
  return {
    user: state.user,
    isLoading: true,
    error: null,
  };
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialContacts,

  extraReducers: builder => {
    // fetch

    // builder.addCase(fetchUser.pending, pendingFunc);
    // builder.addCase(fetchUser.fulfilled, (state, action) => {
    //   return {
    //     user: { token: state.user.token, user: action.payload },
    //     isLoading: false,
    //     error: null,
    //   };
    // });
    // builder.addCase(fetchUser.rejected, rejectFunc);

    // create

    builder.addCase(createUser.pending, pendingFunc);
    builder.addCase(createUser.fulfilled, (_, action) => {
      return {
        user: action.payload,
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(createUser.rejected, rejectFunc);

    // logout

    builder.addCase(logoutUser.pending, pendingFunc);
    builder.addCase(logoutUser.fulfilled, () => {
      return {
        user: null,
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(logoutUser.rejected, rejectFunc);

    // login

    builder.addCase(loginUser.pending, pendingFunc);
    builder.addCase(loginUser.fulfilled, (_, action) => {
      return {
        user: action.payload,
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(loginUser.rejected, rejectFunc);
  },
});

export const usersReducer = userSlice.reducer;
