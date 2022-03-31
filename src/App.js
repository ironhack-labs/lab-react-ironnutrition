import React, { Component } from 'react';
import './App.css';

import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

import 'bulma/css/bulma.css';


class App extends Component {
  state = {
    foods: foods,
    showForm: false
  }

  onClickHandler = ( event ) => {
    this.setState(
      {
        ...this.state,
        showForm: !this.state.showForm
      }
    )
  }

  addFood = (food) => {
    this.setState(
      {
        foods: 
        [
          ...this.state.foods,
          food
        ],
        showForm: !this.state.showForm
      }
    )
  }

  render () {
    const foodList = this.state.foods.map( (food) => {
      return <FoodBox key={food.name} {...food}/>;
    });
    return (
      <div>
        <button className="button is-info" onClick={this.onClickHandler} >Add new food</button>
        {this.state.showForm && <AddFoodForm addFood={this.addFood} />}
        {foodList}
      </div>
    );
  }
  
}

export default App;
