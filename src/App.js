import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/FoodBox/FoodBox';

class App extends Component {
  render(){
    return (
      <div className="App container">
        <div className='row'>
        <FoodBox />
        </div>
      </div>
    );
  }
}

export default App;
