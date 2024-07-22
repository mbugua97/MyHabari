import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentPage: 'news', // default page
};

const progresSlice = createSlice({
    name: 'progress',
    initialState,
    reducers: {
        nextProgress: (state, action) => {
            state.currentPage = action.payload;
        },
    },
});

export const { nextProgress } = progresSlice.actions;
export default progresSlice.reducer;
