import React from 'react';

import 'bulma/css/bulma.css';
import Foods from './foods.json';
import './App.css';

import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import List from './components/List';

class App extends React.Component {
  state = {
    foods: Foods,
    showAddForm: false,
    filteredFoods: Foods,
    listFoods: [],
  };

  handleAdd = (event) => {
    event.preventDefault();

    let newFood = {
      name: event.target.name.value,
      calories: event.target.calories.value,
      image: event.target.image.value,
    };

    this.setState({
      showAddForm: false,
      foods: [...this.state.foods, newFood],
      filteredFoods: [...this.state.foods, newFood],
    });
  };

  handleFilter = (event) => {
    let input = event.target.value;
    let newFoods = this.state.foods.filter((food) => {
      return food.name.startsWith(input);
    });

    this.setState({
      filteredFoods: newFoods,
    });
  };

  handleList = (food, quantity) => {
    let addedFoodIndex = this.state.listFoods.findIndex((listFood) => {
      return listFood.name == food.name;
    });
    let clonedListFoods = [...this.state.listFoods];

    if (addedFoodIndex !== -1) {
      clonedListFoods[addedFoodIndex].quantity = quantity;
    } else {
      food.quantity = quantity;
      clonedListFoods.push(food);
    }

    this.setState({
      listFoods: clonedListFoods,
    });
  };

  handleDelete = (food) => {
    let clonedFoods = this.state.foods.filter((foodItem) => {
      return foodItem.name !== food.name;
    });

    let clonedList = this.state.listFoods.filter((listItem) => {
      return listItem.name !== food.name;
    });

    this.setState({
      foods: clonedFoods,
      filteredFoods: clonedFoods,
      listFoods: clonedList,
    });
  };

  render() {
    return (
      <div>
        <h1>IronNutrition</h1>
        <div>
          {!this.state.showAddForm ? (
            <button
              onClick={() => {
                this.setState({ showAddForm: true });
              }}
            >
              Add Food
            </button>
          ) : (
            <AddFood onAdd={this.handleAdd} />
          )}
        </div>
        <div>
          <input type="text" onChange={this.handleFilter}></input>
        </div>
        <div className="columns">
          <div className="column">
            {this.state.filteredFoods.map((food, index) => {
              return (
                <FoodBox
                  key={index}
                  food={food}
                  onList={this.handleList}
                  onDelete={this.handleDelete}
                />
              );
            })}
          </div>

          <div className="column">
            <List list={this.state.listFoods} />
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default App;
