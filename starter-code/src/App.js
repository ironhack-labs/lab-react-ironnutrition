import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import Foodbox from './components/Foodbox'


class App extends Component {

  render() {
    return (
      <div>
        <Foodbox />
      </div>
    )
  }
}

export default App;
