import axios from 'axios';

const tokenApi = axios.create({
  baseURL: 'https://bootcamp-rent-cars.herokuapp.com'
});
tokenApi.defaults.headers.common.access_token = JSON.parse(localStorage.getItem('auth'))?.access_token

export default tokenApi;