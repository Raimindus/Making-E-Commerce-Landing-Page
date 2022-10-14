import axios from 'axios';

import tokenApi from './tokenApi';

const getBinarApi = () =>
  axios.get('https://bootcamp-rent-car.herokuapp.com/admin/car');

const getBinarById = (binarId) =>
  axios.get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${binarId}`);

export const getCustomerApi = () =>
  axios.get('https://bootcamp-rent-car.herokuapp.com/customer');

export const postCarApi = async (payload) => {
  try {
    const res = await tokenApi.post(
      `https://bootcamp-rent-car.herokuapp.com/customer/order/`,
      payload
    );
    return res;
  } catch (e) {
    console.error(e);
    console.log('ini error di MobilApi pas post axios');
    return e;
  }
};

export const getOrderApi = async (orderId) => {
  try {
    const res = await tokenApi.get(
      `https://bootcamp-rent-car.herokuapp.com/customer/order/${orderId}`
    );
    return res;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const putOrderApi = async (orderId, payload) => {
  try {
    console.log(payload);
    const res = await tokenApi.put(
      `https://bootcamp-rent-car.herokuapp.com/customer/order/${orderId}`,
      payload
    );
    return res;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export { getBinarById };
export { getBinarApi };
