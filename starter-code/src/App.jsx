import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from "./components/FoodBox";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { foods };
  }

  // allfoods

  render() {
    return (
      <div className="App">
        {this.state.foods.map((item) => <FoodBox image={item.image} name={item.name} calories={item.calories} />)}
      </div>
    );
  }
}

export default App;
