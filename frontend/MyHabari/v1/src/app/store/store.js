import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../userSlice';
import pageSlice from '../pageSlice';
import newsSlice from '../newsSlice';
import progresSlice from '../progresSlice';
import refreshReducer from '../refresh'

const store = configureStore({
  reducer: {
    user: userReducer,
    page: pageSlice,
    news: newsSlice,
    progres: progresSlice,
    refresh: refreshReducer,
  },
});

export default store;
