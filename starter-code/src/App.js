import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import {Food} from './foodBox.js'

class App extends Component {
  render() {
    return (
      <div>
        <Food/>
      </div>
    );
  }
}

export default App;
