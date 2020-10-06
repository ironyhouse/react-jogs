import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
// import classes from './App.module.scss';
import Header from './components/Header/Header';
// import Login from './pages/Login/Login';
import Jogs from './pages/Jogs/Jogs';
import Info from './pages/Info/Info';
import AddJogForm from './pages/AddJogForm/AddJogForm';
import Login from './pages/Login/Login';
// import logo from './logo.svg';

class App extends Component {
  state = {
    isLogin: false,
    jogsData: null,
    dateFrom: null,
    dateTo: null
  }


  checkLogin = (value, jogsData) => {
    this.setState({
      isLogin: value,
      jogsData
    })
  }

  changeDateFrom = () => {
    this.setState({
      dateFrom: 'FROM',
    })
    console.log(this.state.dateFrom);
  }
  changeDateTo = () => {
    this.setState({
      dateTo: 'TO',
    })
    console.log(this.state.dateTo);
  }

  render() {
    let routes = (
        <Switch>
          <Route path="/" exact render={ () => <Jogs jogsData={this.state.jogsData}/> } />
          <Route path="/new" exact component={AddJogForm} />
          <Route path="/about" exact component={Info} />
          <Redirect to="/" />
        </Switch>
      )

    return (
      <>  
        {this.state.isLogin
                    ? <><Header isLogin={this.state.isLogin} dateFrom={this.changeDateFrom} dateTo={this.changeDateTo} />{routes}</>
                    : <><Header isLogin={this.state.isLogin} /><Login checkLogin={this.checkLogin} jogs={this.getJogs} /></>
        } 
      </> 
    )
  };
}

export default App;
