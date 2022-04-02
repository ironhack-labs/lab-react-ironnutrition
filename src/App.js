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
    search: "",
    todaysFoods: []
  }

  onClickFormHandler = ( event ) => {
    this.setState(
      {
        ...this.state,
        showForm: true
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
        showForm: false
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

  onChangeQuantityHandler = (event, name) => {
    const { value } = event.target;
    const copyFoods = [ ...this.state.foods ];
    const indexOfFood = copyFoods.findIndex( ( food ) => food.name === name );
    copyFoods[ indexOfFood ].quantity = value; 
    this.setState (
      {
        ...this.state,
        foods: copyFoods
      }
    )
  }

  onClickAddFoodHandler = ( event, name ) => {
    const newTodaysFoodItem = this.state.foods.filter( ( food ) => food.name === name )[0];
    const itemExists = this.state.todaysFoods.some( (food) => food.name === name );
    let newTodaysFoods;
    if (itemExists) {
      const indexItemOnTodaysFoods = this.state.todaysFoods.findIndex ( (food) => food.name === name );
      const newDestructuredItem = { ...newTodaysFoodItem };
      newTodaysFoods = [ ...this.state.todaysFoods ];
      newTodaysFoods[ indexItemOnTodaysFoods ].quantity = Number(newTodaysFoods[ indexItemOnTodaysFoods ].quantity) + Number(newDestructuredItem.quantity);
    } else {
      newTodaysFoods = [ ...this.state.todaysFoods, { ...newTodaysFoodItem } ];
    }
    
    this.setState (
      {
        ...this.state,
        todaysFoods: newTodaysFoods
      }
    )
  }

  onClickRemoveFoodHandler = (event, name ) => {
    const newFoods = this.state.foods.filter( ( food ) => food.name !== name );
    const newTodaysFoods = this.state.todaysFoods.filter( ( food ) => food.name !== name );
    this.setState (
      {
        ...this.state,
        foods: newFoods,
        todaysFoods: newTodaysFoods
      }
    )
  }

  render () {
    const foodList = this.state.foods
      .filter( (food) => food.name.toLowerCase().includes(this.state.search.toLowerCase() ) )
      .map( (food) => {
        return <FoodBox key={food.name} onChangeQuantityHandler={ this.onChangeQuantityHandler } onClickAddFoodHandler={ this.onClickAddFoodHandler } onClickRemoveFoodHandler={ this.onClickRemoveFoodHandler } { ...food }/>;
    });

    let totalCalories = 0;
    const todaysList = this.state.todaysFoods
      .map( (food) => {
        const { name, quantity, calories } = food;
        totalCalories += quantity * calories;
        return <li key={`TodaysFoods-${name}`} > { quantity } { name } = { quantity * calories } cal</li>;
    });

    return (
      <div>
        <button className="button is-info" onClick={this.onClickFormHandler} >Add new food</button>
        {this.state.showForm && <AddFoodForm addFood={this.addFood} />}
        <input className="input" type="text" onChange={ this.onChangeSearchHandler } value={ this.state.search } />
        <div className='columns'>
          <div className='column'>
            {foodList}
          </div>
          <div className="column content">
            <h3>Today's List:</h3>
            <ul>
              { todaysList }
            </ul>
            { totalCalories } cal
          </div>
        </div>
        
      </div>
    );
  }
  
}

export default App;
