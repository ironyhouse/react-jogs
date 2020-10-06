import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import classes from './Navigation.module.scss';

 
class Navigation extends Component {
    renderLinks(links) {
        return links.map((link, index) => {
            return(
                <li key={index}>
                   <NavLink
                    to={link.to}
                    exact={link.exact}
                    activeClassName={classes.active}
                    onClick={this.props.clickMenuToggle}
                   >
                       {link.label}
                   </NavLink>
                </li>
            )
        })
    }
    
    render() {
        const links = [
            {to: '/', label: 'jogs', exact: true},
            {to: '/about', label: 'info', exact: true},
            // {to: '/contact', label: 'contact us', exact: true}
        ]

        return(
            <nav className={classes.nav} style={ this.props.isMenu ? {display: 'flex'} : {display: 'none'}}>
                <ul>
                    { this.renderLinks(links) }
                    <li onClick={this.props.clickMenuToggle}><a href="mailto:ironyhouse92@gmail.com">contact us</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;