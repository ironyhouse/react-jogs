import React, { Component } from 'react'
import classes from './AddButton.scss';
import addImg from '../../img/add-jog.svg';

class AddButton extends Component {
    render() {
        return (
            <div  className={classes.Button}>  
                <img src={addImg} alt="add-img"/>
            </div>
        )
    }
}

export default AddButton;