import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
// import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Products from './components/Products';
import Camera from './components/Camera'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/camera" component={Camera} />
        </Switch>
      </div>
    );
  }
}

export default App;
