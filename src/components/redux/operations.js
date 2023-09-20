import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const delToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',

  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const createContact = createAsyncThunk(
  'contacts/postContact',
  async (arg, thunkAPI) => {
    try {
      await axios.post('/contacts', arg);
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (arg, thunkAPI) => {
    try {
      axios.delete(`/contacts/${arg}`);
      return arg;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const changeContact = createAsyncThunk(
  'contacts/changeContact',
  async (arg, thunkAPI) => {
    try {
      axios.patch(`/contacts/${arg.id}`, {
        name: arg.name,
        number: arg.number,
      });
      return arg;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

// export const fetchUser = createAsyncThunk(
//   'user/fetchCurrent',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get('/users/current');
//       return data;
//     } catch (evt) {
//       return thunkAPI.rejectWithValue(evt.message);
//     }
//   }
// );

export const createUser = createAsyncThunk(
  'user/createUser',
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', arg);
      setToken(data.token);
      return data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.post(`/users/login`, arg);
      setToken(data.token);
      return data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (arg, thunkAPI) => {
    try {
      axios.post(`/users/logout`, arg);
      delToken();
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);
