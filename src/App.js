import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';

import foods from './foods.json';
import FoodBox from './components/FoodBox';
import SelectedFood from './components/SelectedFood';
import AddFood from './components/AddFood';

let foodList = [...foods];

export default class App extends Component {
  state = {
    search: '',
    allFoods: [...foodList],
    selectedFoods: {},
    showForm: false,
  };

  onChangeSearch = (event) => {
    let { value } = event.target;
    let foodSearch = [...foodList];
    let foodResult = foodSearch.filter((food) =>
      food.name.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({
      search: value,
      allFoods: foodResult,
    });
  };

  addFood = (foodDetails) => {
    let copySelectedFoods = this.state.selectedFoods;

    copySelectedFoods[foodDetails.name] = copySelectedFoods[
      foodDetails.name
    ] || {
      quantity: '0',
      name: foodDetails.name,
      calories: foodDetails.calories,
    };
    copySelectedFoods[foodDetails.name].quantity = String(
      Number(copySelectedFoods[foodDetails.name].quantity) +
        Number(foodDetails.quantity)
    );

    copySelectedFoods[foodDetails.name].calories = String(
      Number(copySelectedFoods[foodDetails.name].quantity) *
        Number(foodDetails.calories)
    );

    this.setState({
      selectedFoods: copySelectedFoods,
    });
  };

  addNewFood = (foodDetails) => {
    foodList.splice(0, 0, foodDetails);
    console.log('NEW LIST', foodList);
    this.setState({
      allFoods: foodList,
    });
  };

  remove = (key) => {
    let copySelectedFoods = this.state.selectedFoods;
    delete copySelectedFoods[key];
    this.setState({
      selectedFoods: copySelectedFoods,
    });
  };

  toggleForm = () => {
    console.log('FORMMMMMM', this.state.showForm);
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  render() {
    return (
      <div>
        \{' '}
        <div className="item">
          <h3>
            {this.state.selectedFoods.quantity}
            Search:{' '}
            <input
              type="text"
              name="search"
              value={this.state.search}
              onChange={this.onChangeSearch}
            />
          </h3>
          <div className="columns">
            <div className="column">
              <br />
              <button onClick={this.toggleForm}>Add new food</button>
              {this.state.showForm && <AddFood addNewFood={this.addNewFood} />}
              <br />
              <FoodBox foods={this.state.allFoods} addFood={this.addFood} />
            </div>
            <div className="column">
              <h1>Today's Foods</h1>
              <SelectedFood
                selectedFood={this.state.selectedFoods}
                remove={this.remove}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
