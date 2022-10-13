import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getBinarById, getCustomerApi, postCarApi } from '../../services/MobilApi';

export const getCustomers = createAsyncThunk('cars/getCustomers', async () => {
  const res = await getCustomerApi();
  return res.data;
});

export const getDetailCars = createAsyncThunk(
  'cars/getDetailCars',
  async (binarId) => {
    const res = await getBinarById(binarId);
    return res.data;
  }
);

export const postCars = createAsyncThunk(
  'cars/postCars',
  async (data) => {
    const res = await postCarApi(data);
    return res.data;
  }
);

const initialState = {
  cars: {},
  carsStatus: 'idle'
};

export const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: {
    [getDetailCars.pending]: (state) => ({
      ...state,
      carsStatus: 'loading'
    }),
    [getDetailCars.fulfilled]: (state, action) => ({
      ...state,
      cars: action.payload,
      carsStatus: 'success'
    }),
    [getDetailCars.rejected]: (state) => ({
      ...state,
      carsStatus: 'failed'
    })
  }
});

// Action creators are generated for each case reducer function

export const selectDetailCars = (state) => state.cars.cars;
export const { carDetail } = carSlice.actions;

export default carSlice.reducer;
