import React, { Component } from 'react'
import Filter from './Filter/Filter';
import classes from './Filters.module.scss';

class Filters extends Component {
    
    render() {
        return (
            <div className={classes.Filters}>
                <div className={classes.Filter}>
                    <label htmlFor="">Date from</label>
                    <Filter />
                </div>
                <div className={classes.Filter}>
                    <label htmlFor="">Date to</label>
                    <Filter />
                </div>
            </div>
        )
    }
}

export default Filters;