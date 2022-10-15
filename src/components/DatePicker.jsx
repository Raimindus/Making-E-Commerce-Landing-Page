import React from 'react';
import DatePicker from 'react-multi-date-picker';
import { useDispatch } from 'react-redux';

import { dateRange } from '../redux/features/dateSlice';

function DateSaver() {
  const dispatch = useDispatch();
  const handleChange = (value) => {
    dispatch(dateRange([value[0].format(), value[1].format()]));
    console.log([value[0], value[1]]);
  };

  return (
    <div>
      {' '}
      <DatePicker onChange={(e)=>handleChange(e)} range />
    </div>
  );
}

export default DateSaver;
