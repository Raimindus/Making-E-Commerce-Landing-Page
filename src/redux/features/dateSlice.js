import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dates: []
};

export const dateSlice = createSlice({
  name: 'dates',
  initialState,
  reducers: {
    dateRange: (state, action) => ({
      ...state,
      dates: action.payload
    })
  }
});

// Action creators are generated for each case reducer function

export const selectDateRange = (action) => action.dates.dates;
export const { dateRange } = dateSlice.actions;

export default dateSlice.reducer;
