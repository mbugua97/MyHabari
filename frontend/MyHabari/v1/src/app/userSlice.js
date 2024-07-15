// features/userSlice.js

import { createSlice } from '@reduxjs/toolkit';
import Cookies from "js-cookie";

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null, // Initialize from localStorage if available
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      // Store user data in local storage
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      Cookies.remove("MH_TKN")
      localStorage.removeItem('user');
      window.location.reload()
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;
