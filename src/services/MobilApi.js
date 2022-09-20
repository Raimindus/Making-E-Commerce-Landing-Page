import React from 'react';
import axios from 'axios';

const getBinarApi = () => {
  return axios.get('https://bootcamp-rent-car.herokuapp.com/admin/car');
};

const getBinarById = (binarId) => {
  return axios.get(
    `https://bootcamp-rent-car.herokuapp.com/admin/car/${binarId}`
  );
};

export { getBinarById };
export { getBinarApi };
