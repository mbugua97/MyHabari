import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentPage: 'all', // default page
};

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
});

export const { setPage } = newsSlice.actions;
export default newsSlice.reducer;
