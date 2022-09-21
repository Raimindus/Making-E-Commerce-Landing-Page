import axios from "axios";


const getBinarApi = () => axios.get('https://bootcamp-rent-car.herokuapp.com/admin/car');

const getBinarById = (binarId) => axios.get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${binarId}`);

export {getBinarById};
export {getBinarApi};
