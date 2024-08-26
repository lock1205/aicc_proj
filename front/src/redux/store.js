import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './slice/modalSlice';
import apiSlice from './slice/apiSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice,
    api: apiSlice,
  },
});
export default store;
