import React, { Component } from 'react';
import classes from './MenuToggle.module.scss';
import showMenu from '../../../img/menu.png'
import hideMenu from '../../../img/menu-hide.svg'
 
class MenuToggle extends Component {
    render() {
        return(
            <div className={classes.MenuToggle} onClick={this.props.clickMenuToggle}>
                    {this.props.menuToggle ? <img src={hideMenu} alt="menu-hide"/> : <img src={showMenu} alt="menu"/> }
            </div>
        );
    }
}

export default MenuToggle;