import axios from 'axios';

const tokenApi = axios.create({
  baseURL: 'https://bootcamp-rent-car.herokuapp.com',
  headers: {
    access_token: JSON.parse(localStorage.getItem('auth')).access_token,
  },
});

export default tokenApi;