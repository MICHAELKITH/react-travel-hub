import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './dragonSlice';
import rocketsReducer from './featureRocket/rocketSlice';

const store = configureStore({
  reducer: {
    dragonReducer,
    rockets: rocketsReducer,
  },
});

export default store;
