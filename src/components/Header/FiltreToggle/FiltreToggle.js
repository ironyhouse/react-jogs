import React, { Component } from 'react';
import classes from './FiltreToggle.module.scss';
import filter from '../../../img/filter.svg'
import activeFilter from '../../../img/filter-active.svg'
 
class FiltreToggle extends Component {
    render() {
        return(
            <div className={classes.Filter} onClick={this.props.clickFilterToggle} >
                        {this.props.filterToggle ? <img src={activeFilter} alt="filter-hide"/> : <img src={filter} alt="filter"/>}
            </div>
        );
    }
}

export default FiltreToggle;