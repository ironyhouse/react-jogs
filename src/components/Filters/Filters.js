import React, { Component } from 'react'
import classes from './Filtres.module.css';

class Filtres extends Component {
    render() {
        return(
            <div className={classes.Filtres}>
                <div>
                    <label htmlFor="">Date from</label> 
                    <input 
                            type='number'
                            id='dateFrom'
                            // value={props.value}
                            // onChange={props.onChange}
                    />
                </div>
                <div>
                    <label htmlFor="">Date to</label> 
                    <input 
                            type='text'
                            id='dateTo'
                            // value={props.value}
                            // onChange={props.onChange}
                    />
                </div>
            </div>
        )
    }
}

export default Filtres;