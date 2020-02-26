import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import Foodbox from './foodbox/foodbox'
import Table from './table/table'
import AddFoods from './forms/FoodsForm';

class App extends Component {
  render() {
    return (
      <div>

        
        <Table></Table>
        
      </div>
    );
  }
}

export default App;
