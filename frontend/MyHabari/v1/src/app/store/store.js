import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../userSlice'
import pageSlice from '../pageSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    page:pageSlice
  },
});

export default store;
