import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './slices/dragonSlice';
import missionReducer from './slices/missionSlice';

const store = configureStore({
  reducer: {
    dragonReducer,
    missionReducer,

  },
});

export default store;
