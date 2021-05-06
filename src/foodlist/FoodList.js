import React, { Component } from 'react';
import FoodBox from '../foodbox/FoodBox';
import Form from '../form/Form';
import TodaysFoods from '../todaysfoods/TodaysFoods';
import './FoodList.css';

export default class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: this.props.foods,
      display: false,
      searchedFood: '',
      todaysFoodsList: [],
      totalCalories: 0,
    };
  }

  addTodaysFood = ({ name, calories, quantity }) => {
    let newTodaysFoodsList = [...this.state.todaysFoodsList];
    newTodaysFoodsList.push({ name, calories, quantity });
    this.setState({ todaysFoodsList: this.attachFoods(newTodaysFoodsList)});
    this.updateTotalCalories(calories, quantity);
  };

  //Iteration 6 - Bonus - Attach Today's food per food
  attachFoods(foodsList){
    let attachedFoodList = [];
    foodsList.forEach(food => {
      if(!attachedFoodList.some(attachedFood => attachedFood.name === food.name)){
        attachedFoodList.push({name: food.name, calories: food.calories * food.quantity, quantity:food.quantity});
      } else {
        attachedFoodList.filter(attachedFood => attachedFood.name === food.name)[0].quantity += food.quantity;
        attachedFoodList.filter(attachedFood => attachedFood.name === food.name)[0].calories += food.calories;
      }
    })

    attachedFoodList.sort((a,b) => a.name.localeCompare(b.name))
    return attachedFoodList;
  }

  updateTotalCalories(foodCalories, foodQuantity) {
    let total = this.state.totalCalories + foodCalories * foodQuantity;
    this.setState({ totalCalories: total });
  }

  addFood = (food) => {
    const arrayCopy = [...this.state.foods];
    arrayCopy.push(food);
    this.setState({ foods: arrayCopy });
  };

  displayFoods = () => {
    const { foods } = this.state;
    const foodsFiltered = foods.filter((food) =>
      food.name.includes(this.state.searchedFood)
    );

    return foodsFiltered.map((food) => {
      return (
        <FoodBox key={food.name} {...food} addTodaysFood={this.addTodaysFood} />
      );
    });
  };
  handleSearch(event) {
    this.setState({ searchedFood: event.target.value });
  }

  render() {
    const { todaysFoodsList, totalCalories } = this.state;
    return (
      <>
        <input
          className="input my-2 ml-2"
          name="search"
          type="text"
          placeholder="Type a food..."
          onChange={(e) => this.handleSearch(e)}
        />
        <button
          className="button is-info mt-2 mb-4 ml-2"
          onClick={() => {
            this.setState({ display: !this.state.display });
          }}
        >
          Add a food
        </button>
        {this.state.display && <Form addFood={(food) => this.addFood(food)} />}
        <div id="main-container" className="columns">
          <div id="foods-container" className="column">
            {this.displayFoods()}
          </div>
          <div id="todaysfoods-container" className="column">
            <TodaysFoods
              todaysFoodsList={todaysFoodsList}
              totalCalories={totalCalories}
            />
          </div>
        </div>
      </>
    );
  }
}
