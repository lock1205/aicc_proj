import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './slice/modalSlice';
import apiSlice from './slice/apiSlice';
import authSlice from './slice/authSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice,
    api: apiSlice,
    auth: authSlice,
  },
});
export default store;
