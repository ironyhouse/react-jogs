import React, { Component } from 'react'
import classes from './Header.module.scss'
import Filtres from '../Filters/Filters.js'
import Logo from '../Header/Logo/Logo'
import FiltreToggle from './FiltreToggle/FiltreToggle'
import MenuToggle from './MenuToggle/MenuToggle'
import Navigation from './Navigation/Navigation'


class App extends Component {
    state = {
        filterToggle : false,
        menuToggle: false,
        isMenu: false,
        changeSize : false,
        mobileSize: false
    }

    clickFilterToggle = () => {
        this.setState({
            filterToggle : !this.state.filterToggle
        })
    }
    clickMenuToggle = () => {
        this.setState({
            menuToggle : !this.state.menuToggle,
            isMenu: !this.state.isMenu
        })
    }

    

    render() {
        window.addEventListener('resize', () => {
            // document.location.reload()
            // this.forceUpdate(this.Navigation)
            if (window.screen.width <= 768 ) {
                if (!this.state.mobileSize) {
                    this.setState({
                        mobileSize : true
                    })
                    console.log('modile');
                }
            } else {
                if (this.state.mobileSize) {
                    this.setState({
                        mobileSize : false
                    })
                    console.log('desktop');
                }
            }
        })


        return (
            <>
                <header className={classes.header} style={ (this.state.mobileSize && this.state.menuToggle) ? {background: '#fff'} : {background: '#7ed321'}}>
                    <Logo menuToggle={this.state.menuToggle } mobileSize={this.state.mobileSize } />
                    { this.props.isLogin ?
                        <div className={classes.navWrapper}>
                            { window.screen.width <= 768 ?
                                  <Navigation isMenu={this.state.isMenu} clickMenuToggle={this.clickMenuToggle} />
                                : <Navigation isMenu={true} clickMenuToggle={null} />
                            }
                            <FiltreToggle clickFilterToggle={this.clickFilterToggle} filterToggle={this.state.filterToggle} />
                            <MenuToggle menuToggle={this.state.menuToggle} clickMenuToggle={this.clickMenuToggle} />
                        </div>
                        : null 
                    }
                </header>
                { this.state.filterToggle ? <Filtres dateFrom={this.props.dateFrom} dateTo={this.props.dateTo} /> : null }
            </>
        )
    };
}

export default App;