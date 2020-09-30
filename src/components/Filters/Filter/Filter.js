import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import classes from './Filter.nodule.scss';
 
function Filter() {
  const [value, onChange] = useState(new Date());
 
  return (
      <DatePicker
        onChange={onChange}
        value={value}
        className={classes.Filter}
      />
  );
}

export default Filter;
