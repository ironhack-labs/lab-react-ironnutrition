import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';
import TodaysFood from './components/TodaysFood';

class App extends Component {
  state = {
    foods: foods,
    isAddForm: false,
    filteredFoodsList: foods,
    todaysFood: [],
    totalCalories: 0
  };

  showAddButton = () => {
    this.setState({
      isAddForm: !this.state.isAddForm,
    });
  };

  addFoodHandler = (theFood) => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.unshift(theFood);
    this.setState({
      foods: foodsCopy,
      isAddForm: false,
      filteredFoodsList: foodsCopy,
    });
  };

  searchFoodHandler = (value) => {
    const foodsCopy = [...this.state.foods];
    const filteredArr = foodsCopy.filter((elem) => {
      return elem.name.includes(value);
    });
    this.setState({
      filteredFoodsList: filteredArr,
    });
  };

  addTodaysFood = (foodObj) => {
    let todaysFoodsCopy = [...this.state.todaysFood]
    let found = todaysFoodsCopy.find(food => food.name === foodObj.name);

    foodObj.calories *= foodObj.quantity;

    if(found) {
      found.quantity += foodObj.quantity;
      found.calories += foodObj.calories;
    } else {
      todaysFoodsCopy.push(foodObj);
    }

    const totalCalories = todaysFoodsCopy.reduce(
      (acc, val) => acc + val.calories, 0
    );

    this.setState({ todaysFood: todaysFoodsCopy, totalCalories });
  }

  render() {
    return (
      <div className="App">
        {this.state.isAddForm ? (
          <AddFood addTheFood={this.addFoodHandler} />
        ) : (
          <button onClick={() => this.showAddButton()}>Add food</button>
        )}

        <Search searchFood={this.searchFoodHandler} />
        <div>
          <div>
            {this.state.filteredFoodsList.map((food, index) => (
                <FoodBox food={food} key={index} updateTodaysFood={this.addTodaysFood}/>
              ))}
          </div>
          <div className="section2">
          <h2 id="todays-food-title">Today's foods</h2>
          <div className='ul-container'>
            <ul>
            {this.state.todaysFood.map( (oneTodaysFood, index) => {
              <TodaysFood key={index} {...oneTodaysFood} 
                // deleteFood={() => this.deleteFood(index)}
              />         
            })}
            </ul>
            <p className='total-calories'>Total calories: {this.state.totalCalories}</p>
          </div>
          }
        </div>
        </div>
      </div>
    );
  }
}

export default App;
