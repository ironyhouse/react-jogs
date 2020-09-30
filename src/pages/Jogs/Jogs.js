import React, { Component } from 'react'
import AddButton from '../../components/AddButton/AddButton';
import Jog from '../../components/Jog/Jog'
import classes from './Jogs.module.scss';

class Jogs extends Component {
    render() {
        return(
            <>
                <Jog />
                <Jog /> 
                <Jog /> 
                <Jog />
                <AddButton />
            </>
        )
    }
}

export default Jogs;