import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

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
      axios.post('/contacts', arg);
      return arg;
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

export const fetchUser = createAsyncThunk(
  'user/fetchCurrent',

  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const createUser = createAsyncThunk(
  'user/createUser',
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', arg);
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
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);
