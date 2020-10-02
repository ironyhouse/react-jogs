import React, { Component } from 'react'
import classes from './Jog.module.scss';
import Runner from '../../img/runner.svg';

class Jog extends Component {

    // state = {
    //     isDisplay: true
    // }


    // Sort = () => {
    //     if (this.props.Date < '20.12.2011' || this.props.Date > '20.12.2012' ) {
    //         this.setState = ({
    //             isDisplay: false
    //         })
    //     } else {
    //         this.setState = ({
    //             isDisplay: true
    //         })
    //     }
    // }

    render() {
        return (
            <div className={classes.Jog}>
                <img src={Runner} alt="Runner"/>
                <div>
                    <p className={classes.jogDate} >{this.props.Date}</p>
                    <p><span>Speed: </span>{this.props.Speed}</p>
                    <p><span>Distance: </span>{this.props.Distance} km</p>
                    <p><span>Time: </span>{this.props.Time} min</p>
                </div>
            </div>
        )
    }
}

export default Jog