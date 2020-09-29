import React, { Component } from 'react';
import FoodBox from './components/FoodBox';
import foodList from './foods.json';
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  state = {
    foodList,
    foodName: '',
    foodImage: '',
    foodCalories: '',
    searchParams: '',
    isFormDisplayed: false,
    todayFood: []
  };

  toggleForm = () => {
    this.setState({
      isFormDisplayed: !this.state.isFormDisplayed
    })
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addQuantity = (foodObject) => {
    let todayFood = [...this.state.todayFood, foodObject];
    let found = todayFood.find(food => food.name === foodObject);

    foodObject.calories *= foodObject.quantity;
    if(found) {
      found.quantity += foodObject.quantity;
      found.calories += foodObject.calories;
    }

    this.setState({
      todayFood
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();

    const { foodName, foodCalories, foodImage } = this.state;
    const newFoodList = [{ name: foodName, calories: foodCalories, image: foodImage}, ...this.state.foodList];

    this.setState({
      foodList: newFoodList,
      foodName: '',
      foodCalories: '',
      foodImage: '',
      isFormDisplayed: false
    })
  }

  deleteFood = (foodName) => {
    const newFoodList = this.state.foodList.filter((food => food.name !== foodName));
    this.setState({
      foodList: newFoodList
    })
  }

  render() {
    const totalCalories = this.state.todayFood.reduce((acc, food) => acc + food.calories, 0)

    return (
      <div className='container'>
        <h1 className="title is-1">IronNutrition</h1>
        <h3 className="title is-3">by Michel Ribbens</h3>
        {/* <AddFood /> */}
        <button className='button mb-4' onClick={this.toggleForm}>Add Food</button>
        { this.state.isFormDisplayed && 
        <form className='mb-4' onSubmit={this.handleOnSubmit}>
          {/* Name Field */}
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className='input'
                onChange={this.handleInputChange}
                name='foodName'
                type='text'
                value={this.state.foodName}
                placeholder='Add food name'
                required='true'
              />
            </div>
          </div>
          {/* Calories Field */}
          <div className="field">
            <label className="label">Calories</label>
            <div className="control">
              <input
                className='input'
                onChange={this.handleInputChange}
                type='number'
                name='foodCalories'
                value={this.state.foodCalories}
                placeholder='Add amount of calories'
                required='true'
              />
            </div>
          </div>
          {/* Image Field */}
          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <input
                className='input'
                onChange={this.handleInputChange}
                name='foodImage'
                type='text'
                value={this.state.foodImage}
                placeholder='Add image url'
              />
            </div>
          </div>
          <button className='button' type='submit'>Add New Food</button>
        </form>
        }
        {/* Search Bar */}
        <div className="field">
          <div className="control">
            <input 
              className='input is-primary mb-2' 
              type="text" 
              name='searchParams' 
              value={this.state.searchParams} 
              placeholder='search for food item' 
              onChange={this.handleInputChange} 
            />
          </div>
        </div>
        <div className="foodContainer">
          <div>
            {this.state.foodList.filter(food => food.name.toLocaleLowerCase()
                                .includes(this.state.searchParams.toLocaleLowerCase()))
                                .map((food, index) => 
                                <FoodBox key={index} food={food} addQuantity={this.addQuantity} deleteFood={this.deleteFood} />)
            }
          </div>
          <div>
            <h2 className="title is-2">Today's food</h2>
            {this.state.todayFood.map((food, index) => {
              return (
                <li key={index}>
                  {food.quantity} {food.name} = {food.calories} Cal
                </li>
              )
            })}
            <p>Total: {totalCalories}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;