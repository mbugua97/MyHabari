import { createSlice } from '@reduxjs/toolkit';

const refreshSlice = createSlice({
  name: 'refresh',
  initialState: {
    refresh: false,
  },
  reducers: {
    toggleRefresh: (state) => {
      state.refresh = !state.refresh;
    },
  },
});

export const { toggleRefresh } = refreshSlice.actions;
export default refreshSlice.reducer;
