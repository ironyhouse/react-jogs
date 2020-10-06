import React, { Component } from 'react'
import classes from './Login.module.scss'
import axios from 'axios'


class Login extends Component {


    getToken = async () => {
        // Get token
        const token = await axios.post('https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin?uuid=hello')
        .then (
                response => response
            )
        .catch(error => {
            console.log("Error token", error);
        })
        // Get Jogs
        // const req = await axios.get (
        await axios.get (
            'https://jogtracker.herokuapp.com/api/v1/data/sync',
            {headers: { Authorization: `Bearer ${token.data.response.access_token}` }}
        ).then (
            response => this.props.checkLogin(true, response)
        )
        .catch(error => {
            console.log("Error: jogs not received", error);
        })
    }


    render() {
        return(
            <div className={classes.Login}>
                <div className={classes.LogoBear}></div>
                <button onClick={this.getToken}>Let me in</button>
            </div>
        )
    }
}

export default Login;