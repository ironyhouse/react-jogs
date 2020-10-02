import React, { Component } from 'react'
import classes from './Logo.module.scss'
import { NavLink } from 'react-router-dom'
import logo from '../../../img/logo.svg'
import logoGreen from '../../../img/logoGreen.png'


class Logo extends Component {
    render() {
        return(
            <NavLink to="/" className={classes.Logo}>
                { this.props.menuToggle ? <img src={logoGreen} alt="logo-green"/> : <img src={logo} alt="logo"/> }
            </NavLink>
        );
    }
}

export default Logo;