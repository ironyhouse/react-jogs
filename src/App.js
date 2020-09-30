import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import classes from './App.module.scss';
import Header from './components/Header/Header';
// import Login from './pages/Login/Login';
import Jogs from './pages/Jogs/Jogs';
import Info from './pages/Info/Info';
// import logo from './logo.svg';

class App extends Component {
  // componentDidMount() {
  //   this.props.autoLogin()
  // }


  // function mapDispatchToProps(dispatch) {
  //   return {
  //     autoLogin: () => dispatch(autoLogin())
  //   }
  // }

  // function mapStateToProps(state) {
  //   return {
  //     isAuthenticated: !!state.auth.token
  //   }
  // }


  render() {
    // let routes = (
    //   <Switch>
    //     <Route path="/" exact component={Login} />
    //     <Redirect to="/" />
    //   </Switch>
    // )

    // if (this.props.isAuthenticated) {
    let routes = (
        <Switch>
          <Route path="/" exact component={Jogs} />
          <Route path="/react-jogs" exact component={Jogs} />
          <Route path="/about" exact component={Info} />
          <Route path="/contact" component={Jogs} />
          <Redirect to="/" />
      </Switch>
      )

    return (
      <>  
        <Header />
        <main >
          {routes}
        </main>
      </> 
    )
  };
}

export default App;
