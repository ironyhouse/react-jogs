import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Info from './pages/Info/Info';

class App extends Component {
  render() {
    return (
      <>  
        <header>
        </header>
        <main>
          <Switch>
              {/* <Route path="/react-hooks" exact component={Home} />
              <Route path="/about" component={Info} /> */}
            </Switch>
        </main>
      </> 
    )
  };
}

export default App;
