import { createSlice } from '@reduxjs/toolkit';
import fetchData from './api';

const initialState = {
  status: 'none',
  greeting: '',
};

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: {
    [fetchData.pending]: (state) => ({ ...state, status: 'loading' }),
    [fetchData.fulfilled]: (_, action) => ({
      greeting: action.payload,
      status: 'idle',
    }),
    [fetchData.rejected]: (state) => ({ ...state, status: 'fail' }),
  },
});

export default greetingSlice.reducer;
