import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../userSlice'
import pageSlice from '../pageSlice';
import newsSlice from '../newsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    page:pageSlice,
    news:newsSlice 
  },
});

export default store;
