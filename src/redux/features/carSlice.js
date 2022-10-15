import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  getBinarById,
  getCustomerApi,
  getOrderApi,
  postCarApi,
  putOrderApi
} from '../../services/MobilApi';

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

export const getDetailOrder = createAsyncThunk(
  'cars/getDetailOrder',
  async (orderId) => {
    const res = await getOrderApi(orderId);
    return res.data;
  }
);

export const postCars = createAsyncThunk('cars/postCars', async (data) => {
  const res = await postCarApi(data);
  console.log(res);
  return res.data;
});

export const putOrder = createAsyncThunk(
  'cars/putOrder',
  async ({ orderId, payload }) => {
    const res = await putOrderApi(orderId, payload);
    return res.data;
  }
);

const initialState = {
  cars: {},
  detailOrder: {},
  putDetail: {},
  carsStatus: 'idle',
  postCarsStatus: 'idle',
  detailOrderStatus: 'idle',
  putOrderStatus: 'idle'
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
    }),
    [postCars.pending]: (state) => ({
      ...state,
      postCarsStatus: 'loading'
    }),
    [postCars.fulfilled]: (state, action) => ({
      ...state,
      postCarsStatus: 'success',
      postDetail: action.payload
    }),
    [postCars.rejected]: (state) => ({
      ...state,
      postCarsStatus: 'failed'
    }),
    [getDetailOrder.pending]: (state) => ({
      ...state,
      detailOrderStatus: 'loading'
    }),
    [getDetailOrder.fulfilled]: (state, action) => ({
      ...state,
      detailOrderStatus: 'success',
      detailOrder: action.payload
    }),
    [getDetailOrder.rejected]: (state) => ({
      ...state,
      detailOrderStatus: 'failed'
    }),
    [putOrder.pending]: (state) => ({
      ...state,
      putOrderStatus: 'loading'
    }),
    [putOrder.fulfilled]: (state, action) => ({
      ...state,
      putOrderStatus: 'success',
      putDetail: action.payload
    }),
    [putOrder.rejected]: (state) => ({
      ...state,
      putOrderStatus: 'failed'
    })
  }
});

// Action creators are generated for each case reducer function

export const selectDetailCars = (state) => state.cars.cars;
export const selectDetailOrder = (state) => state.cars.detailOrder;
export const { carDetail } = carSlice.actions;

export default carSlice.reducer;
