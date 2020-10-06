import React, { useState } from "react";
import DatePicker from "react-datepicker";
import classes from './Filter.module.scss';
import './Filter.css';
import "react-datepicker/dist/react-datepicker.css";


const Filter = props => {
  const [startDate, setStartDate] = useState(new Date(props.defaultDate));
  return (
    <DatePicker 
      selected={startDate} 
      onChange={date => setStartDate(date)} 
      className={classes.FilterInput} 
      dateFormat={'dd/MM/yyyy'} 
      // popperPlacement="top-end"
      popperClassName={classes.popperForm}
    />
  );
};


export default Filter;