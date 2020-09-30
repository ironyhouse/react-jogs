import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './AddButton.module.scss';
import addImg from '../../img/add-jog.svg';

class AddButton extends Component {
    render() {
        return (
            <NavLink 
                to="/new" 
                >
                <img src={addImg} alt="add-img" className={classes.AddButton} />
            </NavLink>
        )
    }
}

export default AddButton;