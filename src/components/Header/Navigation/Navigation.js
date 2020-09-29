import React, { Component } from 'react'
import classes from './Navigation.module.scss';
import { NavLink } from 'react-router-dom'
import logo from '../../../img/logo.svg';

class App extends Component {
    state = {

    }

    render() {
        return (
            <header className={classes.header}>
                <NavLink to="/">
                <   img src={logo} alt="Logo"/>
                </NavLink>
            
            <nav className={classes}>
                <ul>
                    <li>
                        <NavLink 
                            exact to="/" 
                            >jogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            exact to="/about" 
                            >info
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            exact to="/contact" 
                            >contact us
                        </NavLink>
                    </li>
                </ul>
                <div className={classes.filter}>

                </div>
            </nav>
            </header>
        )
    };
}

export default App;