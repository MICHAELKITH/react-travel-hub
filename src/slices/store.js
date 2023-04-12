import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './dragonSlice';
import rocketsReducer from './featureRocket/rocketSlice';
import missionReducer from './missionSlice';

const store = configureStore({
  reducer: {
    dragonReducer,
    missionReducer,
    rockets: rocketsReducer,

  },
});

export default store;
