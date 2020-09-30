import React, { Component } from 'react'
import classes from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import Filtres from '../Filters/Filters.js'
import logo from '../../img/logo.svg'
import logoGreen from '../../img/logoGreen.png'
import filter from '../../img/filter.svg'
import activeFilter from '../../img/filter-active.svg'
import showMenu from '../../img/menu.png'
import hideMenu from '../../img/menu-hide.svg'


class App extends Component {
    state = {
        filterToggle : false,
        menuToggle: false,
        isMenu: true, 
    }

    clickFilter = () => {
        this.setState({
            filterToggle : !this.state.filterToggle
        })
    }
    clickMenuToggle = () => {
        this.setState({
            menuToggle : !this.state.menuToggle,
            isDisplay : !this.state.isDisplay
        })
    }

    render() {
        const DISPLAY_NONE = { display: 'none' }
        const DISPLAY_FLEX = { display: 'flex' }
        const BG_APPLE = { background: '#7ed321'}
        const BG_WHITE = { background: '#fff'}

        return (
            <>
                <header className={classes.header} style={ this.state.menuToggle === true ? BG_WHITE : BG_APPLE }>
                    <NavLink to="/" className={classes.logo}>
                        { this.state.menuToggle ? <img src={logoGreen} alt="logo-green"/> : <img src={logo} alt="logo"/> }
                    </NavLink>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <nav className={classes.nav} style={ this.state.menuToggle === true ? DISPLAY_FLEX : DISPLAY_NONE }>
                            <ul>
                                <li>
                                    <NavLink 
                                        to="/" 
                                        >jogs
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to="/about" 
                                        >info
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to="/contact" 
                                        >contact us
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className={classes.filter} onClick={this.clickFilter}>
                                    {this.state.filterToggle ? <img src={activeFilter} alt="filter-hide"/> : <img src={filter} alt="filter"/>}
                        </div>
                        <div className={classes.menuToggle} onClick={this.clickMenuToggle}>
                                {this.state.menuToggle ? <img src={hideMenu} alt="menu-hide"/> : <img src={showMenu} alt="menu"/> }
                        </div>
                    </div>
                </header>
                { this.state.filterToggle === true ? <Filtres/> : null }
            </>
        )
    };
}

export default App;