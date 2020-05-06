import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox.js';
import Search from './components/Search';

class App extends Component {
  state = {
    foods,
    allfoods: foods,
  };
  searchFood = e => {
    //const foundFood = [... this.state.foods]
    if (e.target.value) {
      const filteredFoods = [...this.state.foods].filter(food =>
        food.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      this.setState({ foods: filteredFoods });
    } else {
      this.setState({ foods: this.state.allfoods });
   }
  };
  render() {
    return (
      <div className="App">
        <Search fcn={this.searchFood} />
        {this.state.foods.map((food, idx) => (
          <FoodBox food={food} key={idx}></FoodBox>
        ))}
      </div>
    );
  }
}

export default App;
