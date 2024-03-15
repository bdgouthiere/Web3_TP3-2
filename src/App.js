import './App.css';
import React, { Component } from 'react'
import Ephemeride from './composants/Ephemeride';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Éphémérides</h1>
        <Ephemeride />
      </div>
    );

  }
}

export default App;
