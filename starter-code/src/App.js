import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox';

class App extends Component {
  constructor () {
    super ()
    this.state = {
      foods : foods
    } 
  }
  render() {
    return (
      <React.Fragment>
          {this.state.foods.map((food, i) => {
            return <FoodBox {...food} key= {i}/>
          })}

       
      </React.Fragment>
    );
  }
}

export default App;
