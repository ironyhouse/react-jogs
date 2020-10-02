import React, { Component } from 'react'
import classes from './SadFace.module.scss';
import faceImg from '../../img/sad-face.svg'
import { NavLink } from 'react-router-dom';

class SadFace extends Component {
    render() {
        return(
            <>
                <div className={classes.Face}>
                    <img src={faceImg} alt="sad-face"/>
                    <p>Nothing is there</p>
                    <NavLink to="/new" > <button>Create your jog first</button></NavLink>
                </div>
            </>
        )
    }
}

export default SadFace;