import { configureStore } from '@reduxjs/toolkit';

import carDetailReducer from './features/carSlice';
import dateReducer from './features/dateSlice';

export const store = configureStore({
  reducer: {
    dates: dateReducer,
    cars: carDetailReducer
  }
});
