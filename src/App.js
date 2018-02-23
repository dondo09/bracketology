import React, { Component } from 'react';
import './App.css';
//import Login from './components/login';
import Dashboard from './components/dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Dashboard />
      </div>
    );
  }
}

export default App;
