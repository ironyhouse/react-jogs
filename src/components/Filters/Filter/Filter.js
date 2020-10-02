import React, { useState } from "react";
import DatePicker from "react-datepicker";
import classes from './Filter.module.scss';
import "react-datepicker/dist/react-datepicker.css";


const Filter = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} className={classes.Filter} dateFormat={'dd/MM/yyyy'} />
  );
};


export default Filter;