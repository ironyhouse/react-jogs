import React, { Component } from 'react'
import classes from './Login.module.scss'
import Bear from '../../img/bear-face.svg';

class Login extends Component {
    render() {
        return(
            <div className={classes.Login}>
                <div className={classes.LogoBear}></div>
                <button>Let me in</button>
            </div>
        )
    }
}

export default Login;