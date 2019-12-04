import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import Foodbox from './Foodbox/Foodbox';



class App extends Component {
  constructor(){
    super()
    this.state = {
      foodsArray : [...foods]
    }
  }

  render() {
    return (
      <div className="App">
       { this.state.foodsArray.map((food, i) => (<Foodbox key={i} payload ={({...food})}></Foodbox>))}
      </div>
    );
  }
}

export default App;
