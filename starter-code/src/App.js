import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox/FoodBox';
import AddFood from './components/AddFood/AddFood';
import Button from './components/Button/Button';
import Search from './components/Search/Search';
import FoodList from './components/FoodList/FoodList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: foods.slice(0),
      filteredFoods: foods.slice(0),
      dispĺayAddFood: false,
      foodList: { },
      totalCalories: 0,
    }
  }

  onClickDisplayAdd = () => {
    this.setState({
      dispĺayAddFood: true
    })
  }

  addFoodHandler = (foodToAdd) => {
    const foodsCopy = [...this.state.foods];
    const filteredFoodsCopy = [...this.state.filteredFoods];
    foodsCopy.push(foodToAdd);
    filteredFoodsCopy.push(foodToAdd);
    this.setState({
      foods: foodsCopy,
      filteredFoods: filteredFoodsCopy,
      dispĺayAddFood: false,
    })
  }

  foodSearch = (search) => {
    const { foods } = this.state;

    let filteredFoods = foods.filter((food) => {
      return food.name.toLowerCase().includes(search.toLowerCase());
    });

    this.setState({
      filteredFoods,
    })
  }

  addFoodToList = (foodToList) => {
    const { foodList } = this.state;
    let { totalCalories } = this.state;
    const { name, calories, qty } = foodToList;
    
    if (!foodList[name]) {
      foodList[name] = {
        name,
        calories,
        qty,
      }
    } else {
      foodList[name].qty += qty;
    }

    totalCalories += +qty * +calories;

    this.setState({
      foodList,
      totalCalories,
    })
  }

  render() {
    const { filteredFoods, foodList, totalCalories } = this.state;
    return (
      <div className="container">
        <Button onClickFunc={this.onClickDisplayAdd} children="Add new food!"></Button>
        {this.state.dispĺayAddFood ? 
          <AddFood addFood={this.addFoodHandler} />:
          null
        }
        <Search searchFunction={this.foodSearch} />
        {
          filteredFoods.map((food, idx) => {
            return <FoodBox key={idx} name={food.name} calories={food.calories} image={food.image} children='+' onClickFunc={this.addFoodToList} />
          })
        }
        <FoodList list={foodList} totalCalories={totalCalories} />
      </div>
    );
  }
}

export default App;
