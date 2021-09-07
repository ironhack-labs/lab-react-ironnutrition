import React from 'react';
import './FoodList.css';
import { v4 as uuidv4 } from 'uuid';
import foods from '../../foods.json';
import FoodBox from '../FoodBox/FoodBox';
import NewFood from '../NewFood/NewFood';
import SearchBar from '../SearchBar/SearchBar';

class FoodList extends React.Component {
  state = {
    foods: foods.map((food) => ({
      ...food,
      id: uuidv4(),
      quantity: 0,
    })),
    search: '',
    todayFood: [],
  };

  onAdd = (food) => {
    this.setState({
      foods: [...this.state.foods, { ...food, id: uuidv4() }],
    });
  };

  onSearch = (search) => {
    this.setState({
      search: search,
    });
  };

  onChangeQuantity = (id, quantity) => {
    if (quantity < 0) {
      return;
    }
    const newFoodState = [...this.state.foods];
    const foodToModifyIndex = newFoodState.findIndex((food) => food.id === id);
    newFoodState[foodToModifyIndex].quantity = quantity;

    this.setState({ foods: newFoodState });
  };

  onAddToday = (food) => {
    // const { value, name } = event.target;
    // const duplicateFoodToday = [this.state.foods];
    // const foodFinded = duplicateFoodToday.findIndex(
    //   (food) => food.name === name
    // );
    // const newListItem = duplicateFoodToday[foodFinded];
    // const finalList = [...this.state.todayFood, newListItem];
    this.setState({
      todayFood: [food, this.state.todayFood],
    });
  };

  render() {
    return (
      <div className="FoodList">
        <div>
        <NewFood onAdd={this.onAdd} />
        <SearchBar onSearch={this.onSearch} />
        {this.state.foods
          .filter((food) =>
            food.name.toLowerCase().includes(this.state.search.toLowerCase())
          )
          .map((food) => (
            <FoodBox
              {...food}
              onAddToday={this.onAddToday}
              onChange={this.onChangeQuantity}
            />
          ))}
        </div>
        <div className="todayFood">
          <h1>
            <strong>Today's foods</strong>
          </h1>
          <ul>
            {this.state.todayFood.length > 1 &&
              this.state.todayFood.map((food) => {
                let totalCalories = Number(food.calories*food.quantity)
                return (
                  <li key={food.id}>
                    {food.quantity} {food.name} = {totalCalories}
                    cal
                  </li>
                );
              })}
          </ul>
          <span>Total: cal</span>
        </div>
      </div>
    );
  }
}

export default FoodList;
