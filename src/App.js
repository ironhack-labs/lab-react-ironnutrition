import React, { Component } from 'react';
import Foods from './components/Foods';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Foods />
      </div>
    );
  }
}

export default App;