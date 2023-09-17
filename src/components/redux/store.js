import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsStateReducer } from './contactsStateSlice';
import { filterReducer } from './filterSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { usersReducer } from './userSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: 'userToken',
};

const rootReduser = combineReducers({
  contacts: contactsStateReducer,
  filter: filterReducer,
  user: usersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReduser);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
