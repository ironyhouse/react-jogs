import React, { Component } from 'react'
import classes from './addJogForm.module.scss';

class addJogForm extends Component {
    render() {
        return(
            <form className={classes.addJog}>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
            </form>
        )
    }
}

export default addJogForm;