import React, { Component } from 'react'
import classes from './Jog.module.scss';
import Runner from '../../img/runner.svg';

class Jog extends Component {
    render() {
        return (
            <div className={classes.Jog}>
                <img src={Runner} alt="Runner"/>
                <div>
                    <p className={classes.jogDate} >20.12.2017</p>
                    <p><span>Speed: </span>20</p>
                    <p><span>Distance: </span>15 km</p>
                    <p><span>Time: </span>60 min</p>
                </div>
            </div>
        )
    }
}

export default Jog