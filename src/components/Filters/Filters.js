import React, { Component } from 'react'
import Filter from './Filter/Filter';
import classes from './Filters.module.scss';

class Filters extends Component {
    state = {
        defaultDate: '01/01/1970'
    }
    
    render() {
        console.log(this.state.defDate);
        return (
            <div className={classes.Filters}>
                <div className={classes.Filter}>
                    <label onClick={this.props.dateFrom}>Date from</label>
                    <Filter defaultDate = {this.state.defaultDate} />
                </div>
                <div className={classes.Filter}>
                    <label onClick={this.props.dateTo}>Date to</label>
                    <Filter defaultDate = {Date.now()}/>
                </div>
            </div>
        )
    }
}

export default Filters;