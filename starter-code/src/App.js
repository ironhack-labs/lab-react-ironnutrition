import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import {Foodbox} from './Components/Foodbox';

class App extends Component {
  render() {
    return (
        foods.map((e) => {
          return (
            <Foodbox name={e.name} calories={e.calories} image={e.image} quantity={e.quantity}/>
          )
        })
    );
  }
}

export default App;

