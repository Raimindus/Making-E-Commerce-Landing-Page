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
    await tokenApi.post(
      `https://bootcamp-rent-car.herokuapp.com/customer/order/`,
      payload
    );
  } catch (e) {
    console.error(e);
    console.log('ini error di MobilApi pas post axios');
  }
};

export { getBinarById };
export { getBinarApi };
