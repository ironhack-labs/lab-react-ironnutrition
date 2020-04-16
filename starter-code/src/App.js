import React, { Component } from 'react';
import './App.css';
import ShowFood from './components/ShowFood';

class App extends Component {
  render() {
    return (
      <div className="App">
       <ShowFood/>
      </div>
    );
  }
}

export default App;
