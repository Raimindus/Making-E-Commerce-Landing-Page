import axios from 'axios';

export const tokenApi = axios.create({
  baseURL: 'https://bootcamp-rent-car.herokuapp.com',
  headers: {
    access_token: JSON.parse(localStorage.getItem('auth')).access_token,
  },
});
