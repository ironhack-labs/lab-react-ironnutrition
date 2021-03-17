import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import FoodBox from './Components/FoodBox';
import FoodForm from './Components/FoodForm';
import SearchBar from './Components/SearchBar';
import TodayFood from './Components/TodayFood';

export class App extends Component {
  foodList = [...foods];

  state = {
    foods: this.foodList,
    todayFoods: [],
    form: false,
  };

  handleAddFood = (addDetails) => {
    this.foodList = [addDetails, ...this.foodList ];
    this.setState({ foods: this.foodList, form: false });
 
  };

  handleSearchResult = (searchResult) => {
    const value = searchResult;
    const searchArray = this.foodList.filter((food) =>
      food.name.includes(value)
    );
    this.setState({ foods: searchArray });
  };

  handleAddTodayFood = (addTodayFood) => {

    if (
      this.state.todayFoods.filter((food) => food.name === addTodayFood.name)
        .length > 0
    ) {
      this.state.todayFoods.forEach((food) => {
        if (food.name === addTodayFood.name)
          food.quantity = Number(food.quantity) + Number(addTodayFood.quantity);
      });
      this.setState({ todayFoods: this.state.todayFoods });
    } else {
      let newFood
      this.state.foods.forEach((food) => {
        if (food.name === addTodayFood.name) {
        food.quantity = addTodayFood.quantity
        newFood = food
        }
      });
      console.log(newFood)
      this.setState({ todayFoods: [newFood, ...this.state.todayFoods] });
    }
  };

  handleRemoveTodayFood = (addTodayFood) => {
   
    if (
      this.state.todayFoods.filter((food) => food.name === addTodayFood.name)
        .length > 0
    ) {
      this.state.todayFoods.forEach((food) => {
        if (food.name === addTodayFood.name)
        food.quantity = Number(food.quantity) - Number(addTodayFood.quantity)
      });
      const newArray = this.state.todayFoods.filter(food => food.quantity > 0)
      this.setState({ todayFoods: newArray });
    } 
  };

  formAppear = () => {
    this.setState({form: (!this.state.form)})
  }

  render() {

    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <div className="search__box">
          <SearchBar search={this.handleSearchResult} />
        </div>
        <div className="form__box">
          <button onClick={this.formAppear}><h2>Add a food</h2></button>
          {this.state.form && <FoodForm add={this.handleAddFood} />
          }
        </div>
        <div className="list__box">
          <div className="food__box">
            {this.state.foods.map((product, index) => (
              <FoodBox
                product={product}
                key={index}
                add={this.handleAddTodayFood}
                remove={this.handleRemoveTodayFood}
              />
            ))}
          </div>
          <div className="today__food">
            <h2>Today's foods</h2>
            <TodayFood todayFoods={this.state.todayFoods} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
