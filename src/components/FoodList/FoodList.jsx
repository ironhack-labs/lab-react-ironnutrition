import React from 'react';
import './FoodList.css';
import { v4 as uuidv4 } from 'uuid';
import foods from '../../foods.json';
import FoodBox from '../FoodBox/FoodBox';
import NewFood from '../NewFood/NewFood';
import SearchBar from '../SearchBar/SearchBar';

class FoodList extends React.Component {
  state = {
    foods: foods,
    search: '',
    todayFood: [],
  };

  onAdd = (food) => {
    this.setState({
      foods: [food, ...this.state.foods],
    });
  };

  onSearch = (search) => {
    this.setState({
      search: search,
    });
  };

  // onChangeQuantity = (id, quantity) => {
  //   if (quantity < 0) {
  //     return;
  //   }
  //   const newFoodState = [...this.state.foods];
  //   const foodToModifyIndex = newFoodState.findIndex((food) => food.id === id);
  //   newFoodState[foodToModifyIndex].quantity = quantity;

  //   this.setState({ foods: newFoodState });
  // };

  onAddToday = (tFood) => {
    this.setState({
      todayFood: [tFood, ...this.state.todayFood],
    });
    // console.log('array todaFood', this.state.todayFood);
  };

  calculateFoodQuantity = (foodName) => {
      let foodQuantity = 0
      console.log(foodName)
      console.log(this.state.todayFood)
      for(let i = 0; i <= this.state.todayFood; i++){
        if(this.state.todayFood[i] === foodName){
          foodQuantity = foodQuantity + 1
        }
      }
      console.log(foodQuantity)
      return foodQuantity
    }

  render() {
   
    return (
      <div className="FoodList">
        <NewFood onAdd={this.onAdd} />
        <SearchBar onSearch={this.onSearch} />
        {this.state.foods
          .filter((food) =>
            food.name.toLowerCase().includes(this.state.search.toLowerCase())
          )
          .map((food) => (
            <FoodBox onAddToday={this.onAddToday} {...food} />
          ))}
        <ul>
          {this.state.todayFood.map((tFood) => {
            return (
              <li>
                {this.calculateFoodQuantity(tFood)}{tFood.name} = {tFood.calories} cal
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FoodList;
