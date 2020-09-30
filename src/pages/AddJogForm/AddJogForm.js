import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './AddJogForm.module.scss';
import Cancel from '../../img/cancel.svg';

class AddJogForm extends Component {
    render() {
        return(
            <form className={classes.AddJogForm}>
                <NavLink to="/">
                    <img src={Cancel} alt=""/>
                </NavLink>

                <div>
                    <label htmlFor="">Distance</label>
                    <input type="text"/>
                </div>
                <div>
                    <label htmlFor="">Time</label>
                    <input type="text"/>
                </div>
                <div>
                    <label htmlFor="">Date</label>
                    <input type="text"/>
                </div>



                <button>Save</button>
            </form>
        )
    }
}

export default AddJogForm;