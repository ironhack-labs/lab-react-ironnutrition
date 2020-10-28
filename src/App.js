import React from 'react';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';

import foods from './foods.json';

import 'bulma/css/bulma.css';
import './App.css';

class App extends React.Component {
  state = {
    cloneFoods: foods,
    addForm: false,
    todaysFoods: [],
    totalCal: 0,
  };

  // Form handler //
  handleAdd = (e) => {
    e.preventDefault();
    let name = e.target.addFoodName.value;
    let image = e.target.addFoodImage.value;
    let calories = e.target.addFoodCalories.value;

    let newFood = {
      name: name,
      image: image,
      calories: calories,
      quantity: 0,
    };
    this.setState({
      cloneFoods: [...foods, newFood],
      addForm: false,
    });
  };

  handleForm = () => {
    this.setState({
      addForm: true,
    });
  };

  // Search handler //
  handleSearch = (e) => {
    e.preventDefault();
    const { cloneFoods } = this.state;
    let searchInput = e.target.value.toLowerCase();
    console.log(searchInput);
    let results = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchInput);
    });
    this.setState({
      cloneFoods: results,
    });
  };

  // Today's food handler //
  handleTodaysFood = (item, qty) => {
    console.log("Today's food", item);
    let duplicate = false;
    const { todaysFoods, totalCal } = this.state;

    let newFood = {
      name: item.name,
      calories: item.calories,
      quantity: qty,
    };

    let newFoods = todaysFoods.map((food) => {
      if (food.name == item.name) {
        food = {
          name: food.name,
          calories: newFood.calories * (parseInt(food.quantity) + parseInt(qty)),
          quantity: parseInt(food.quantity) + parseInt(qty),
        };
        console.log(food);
        duplicate = true;
        return food;
      }
      return food;
    });

    this.setState({
      todaysFoods: duplicate ? [...newFoods] : [...newFoods, newFood],
      totalCal: totalCal + newFood.quantity * newFood.calories,
    });
    duplicate = false;
  };

  handleDelete = (itemName) => {
    const { todaysFoods } = this.state;
    let filteredFoods = todaysFoods.filter((food) => {
      return itemName !== food.name;
    });
    this.setState({
      todaysFoods: filteredFoods,
    });
  };

  render() {
    const { cloneFoods, addForm, todaysFoods, totalCal } = this.state;
    return (
      <div className="container">
        <Search onSearch={this.handleSearch} />

        {!addForm ? (
          <button onClick={this.handleForm} className="button is-link">
            Do you want to add item?
          </button>
        ) : (
          <AddFood onAdd={this.handleAdd} />
        )}

        <FoodBox
          foods={cloneFoods}
          onTodaysFood={this.handleTodaysFood}
          onDelete={this.handleDelete}
          today={todaysFoods}
          calories={totalCal}
        />
      </div>
    );
  }
}

export default App;
