import React, { Component } from 'react';
import './App.css';
import DisplayFoods  from './components/DisplayFoods'

class App extends Component {

  render() {
    return (
      <div className="App">
        <DisplayFoods />
      </div>
    );
  }
}

export default App;
