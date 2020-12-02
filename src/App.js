import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './Foodbox/FoodBox';
import NewFoodForm from './NewFoodForm/NewFoodForm';
import Search from './Search/Search';
import foods from './foods.json';

  

class App extends Component {
  state = {
    foods: foods,
    showForm: false,
  }

  toggleForm = () => {
    this.setState ({showForm: !this.state.showForm});
  };

  addOneFood = (newFood) => {
    const updatedFoodList = [newFood, ...this.state.foods]

    this.setState( { foods: updatedFoodList } );

    this.toggleForm();

  };

  render() {
 
    return (
    <div className="App">
      <Search/>
      <button onClick={this.toggleForm}>Add new food</button>
      {this.state.showForm ? <NewFoodForm addFood={this.addOneFood}/> : null}

      {this.state.foods.map((food) => {
        return <FoodBox food={food} />;
      })}
    </div>
  );
 }
}

export default App;
