import React, { Component } from 'react';
import './App.css';
import FoodList from './components/FoodList';


import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
      <div className='row'>
      <FoodList />
        </div>
      </div>
    );
  }
}

export default App;
