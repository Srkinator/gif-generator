import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MainPage from '../src/components/main';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="background-img">
        </div>
        < MainPage />
      </div>
    );
  }
}

export default App;
