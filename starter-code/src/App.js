import React, { Component } from 'react';
import './App.css';
import ShowFood from './components/ShowFood';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Iron Nutrition</h1>
       <ShowFood />
      </div>
    );
  }
}

export default App;
