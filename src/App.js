import React, { Component } from 'react';
import './App.css';

import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

import 'bulma/css/bulma.css';


class App extends Component {
  state = {
    foods: foods,
    showForm: false,
    search: ""
  }

  onClickFormHandler = ( event ) => {
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
        ...this.state,
        foods: 
        [
          ...this.state.foods,
          food
        ],
        showForm: !this.state.showForm
      }
    )
  }

  onChangeSearchHandler = (event) => {
    const { value } = event.target;

    this.setState(
      {
        ...this.state,
        search: value
      }
    )
  }

  render () {
    const foodList = this.state.foods
      .filter( (food) => food.name.toLowerCase().includes(this.state.search.toLowerCase() ) )
      .map( (food) => {
      return <FoodBox key={food.name} {...food}/>;
    });
    return (
      <div>
        <button className="button is-info" onClick={this.onClickFormHandler} >Add new food</button>
        {this.state.showForm && <AddFoodForm addFood={this.addFood} />}
        <input className="input" type="text" onChange={ this.onChangeSearchHandler } value={ this.state.search } />
        {foodList}
      </div>
    );
  }
  
}

export default App;
