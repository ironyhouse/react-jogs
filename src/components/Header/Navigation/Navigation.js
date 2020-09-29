import React, { Component } from 'react'
import classes from './Navigation.module.scss'
import { NavLink } from 'react-router-dom'
import logo from '../../../img/logo.svg'
import filter from '../../../img/filter.svg'
import activeFilter from '../../../img/filter-active.svg'
import showMenu from '../../../img/menu.png'
import hideMenu from '../../../img/menu-hide.svg'

class App extends Component {
    state = {
        filterToggle : true,
        menuToggle: true
    }

    clickFilter = () => {
        this.setState({
            filterToggle : !this.state.filterToggle
        })
    }
    clickMenu = () => {
        this.setState({
            menuToggle : !this.state.menuToggle
        })
    }

    render() {
        return (
            <header className={classes.header}>
                <NavLink to="/">
                    <img src={logo} alt="Logo"/>
                </NavLink>
            
            <nav className={classes.nav}>
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
                <div className={classes.filter} onClick={this.clickFilter}>
                    {this.state.filterToggle ? <img src={filter} alt="filter"/> : <img src={activeFilter} alt="filter-hide"/>}
                </div>
            </nav>
            <div className={classes.menu} onClick={this.clickMenu}>
                {this.state.menuToggle ? <img src={showMenu} alt="menu"/> : <img src={hideMenu} alt="menu-hide"/>}
            </div>
            </header>
        )
    };
}

export default App;