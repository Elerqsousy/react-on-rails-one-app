import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting_slice'

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
