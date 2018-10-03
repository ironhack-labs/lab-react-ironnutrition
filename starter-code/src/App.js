import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import { Foodbox } from './Components/Foodbox';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Foodbox/>
      </div>
    );
  }
}

export default App;
