import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';
import TodayList from './components/TodayList';

class App extends Component {
  state = {
    foods: foods,
    sortValue: '',
    inputValue: '',
    todaysFoods: [],
    inputQuantity: '',
  };

  addFoodHandler = (theFood) => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(theFood);
    this.setState({
      foods: foodsCopy,
    });
  };

  sortFoods = (foods) => {
    return foods.sort((a, b) => (a.name > b.name ? 1 : -1));
  };

  foodsFilterOnChange = (event) => {
    console.log('hi from onChange', event.target.value);
    this.setState({
      inputValue: event.target.value,
    });
  };

  onChangeQuantity = (event) => {
    console.log('hi from onChange', event.target.value);
    // const name = event.target.name
    this.setState({
      inputQuantity: event.target.value,
    });
  };

  addFoodToList = (food) => {
    // update quantity
    // let foods = this.state.foods;
    // const name = food.name
    food.quantity++;
    food.calories = food.calories * food.quantity;

    // console.log('food',food)
    // console.log('foods[food]',foods[name])
    // console.log('clickedfoodnamequantity',foods[clickedFoodName].quantity)
    // foods[clickedFoodName].quantity++;

    const todaysFoods = this.state.todaysFoods;

    const found = todaysFoods.some((item) => item.name === food.name);

    if (!found) {
      console.log('calories',food.calories)
      todaysFoods.push(food);
    }

    this.setState({
      todaysFoods: todaysFoods,
    });
  };

  render() {
    const filteredFoods = this.state.foods.filter((food) => {
      return food.name
        .toLowerCase()
        .includes(this.state.inputValue.toLowerCase());
    });

    return (
      <div className="App">
        <div>
          <AddFood addFood={this.addFoodHandler} />
        </div>

        <div>
          <Search
            foods={this.sortFoods(filteredFoods)}
            inputValue={this.state.inputValue}
            foodsFilterOnChange={this.foodsFilterOnChange}
          />
        </div>

        <div>
          <div>
            {filteredFoods.map((food) => {
              return (
                <FoodBox
                  key={food.name}
                  clickToAdd={() => this.addFoodToList(food)}
                  onChangeHandler={this.onChangeQuantity}
                  {...food}
                />
              );
            })}
          </div>
          <div>
            <TodayList todaysFoods={this.state.todaysFoods} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
