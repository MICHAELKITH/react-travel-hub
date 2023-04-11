import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './slices/dragonSlice';

const store = configureStore({
  reducer: {
    dragonReducer,

  },
});

export default store;
