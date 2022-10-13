import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

import { selectDetailCars } from '../redux/features/carSlice';
import { selectDateRange } from '../redux/features/dateSlice';

const carPrice = () => {
  const dates = useSelector(selectDateRange);
  const detailMobil = useSelector(selectDetailCars);

  const date1 = dayjs(dates[0]);
  const date2 = dayjs(dates[1]);
  const dateDiff = date2.diff(date1, 'day');

  const finalPrice = dateDiff * detailMobil.price;

  return { finalPrice, dates, dateDiff, detailMobil };
};

export default carPrice;
