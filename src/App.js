import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './component/FoodBox';

import React, { Component } from 'react';

export default class App extends Component {
  state = {
    foods: foods,
    showForm: false,

    name: '',
    calories: '',
    image: '',
    // https://s1.eestatic.com/2020/01/14/cocinillas/recetas/sopas-y-cremas/Cocina_Asiatica-Sopas_y_cremas_459714724_142387700_854x640.jpg

    todayFoodName: '',
    todayCalories: 0,
    todayCaloriesTotal: 0,
    todayQuantity: 0,
    todayFoods: [],

    total: 0,
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, calories, image } = this.state;
    const newfood = { name, calories, image, quantity: 0 };
    this.setState({
      foods: [newfood, ...this.state.foods],
      showForm: false,
      name: '',
      calories: '',
      image: '',
    });
  };

  toggleForm = () => {
    this.setState({ showForm: true });
  };

  handleSearch = (event) => {
    const foodsCopy = [...foods];
    const value = event.target.value;
    const filteredFoods = foodsCopy.filter((food) => {
      if (food.name.toLowerCase().includes(value.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });

    this.setState({ foods: filteredFoods });
  };

  addFood = (event) => {
    event.preventDefault();

    const { todayFoodName, todayQuantity, todayCalories } = this.state;
    if (todayQuantity != 0) {
    
      const todayCaloriesTotal = todayCalories * todayQuantity;

      const total = this.state.total + todayCaloriesTotal;
    

      let hasfood = false;

      const todayFoodsCopy = [...this.state.todayFoods];
      todayFoodsCopy.forEach((food) => {
        if (food.todayFoodName === todayFoodName) {
          hasfood = true;

          food.todayQuantity += todayQuantity;

          food.todayCaloriesTotal = food.todayQuantity * todayCalories;
        }
      });


      if (hasfood && todayCalories != 0) {
        this.setState({
          todayFoods: todayFoodsCopy,
          total: total,
        });
      } else {
        const updatedTodayFoods = [
          ...this.state.todayFoods,
          { todayFoodName, todayQuantity, todayCalories, todayCaloriesTotal },
        ];
        this.setState({
          todayFoods: updatedTodayFoods,
          total: total,
        });
      }
    }

  };

  handleQuantity = (event) => {
    const { name, value } = event.target;

 
    const foodObj = this.state.foods.filter((food) => {
      if (food.name === name) {
        return true;
      } else {
        return false;
      }
    });

    const { calories, quantity } = foodObj[0];
  

    this.setState({
      todayFoodName: name,
      todayCalories: calories,
      todayQuantity: value,
    });
  };

  handleDelete = (foodName) => {
    let { todayFoods, total } = this.state;
    const todayFoodsCopy = [...todayFoods];
    const updatedTodayFood = todayFoodsCopy.filter((food) => {
      if (food.todayFoodName === foodName) {
        total -= food.todayCaloriesTotal;
        return false;
      } else {
        return true;
      }
    });

    this.setState({
      todayFoods: updatedTodayFood,
      total,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <div>
          <input
            type="text"
            className="input search-bar"
            name="search"
            placeholder="Search"
            onChange={this.handleSearch}
          />
        </div>

        <button onClick={this.toggleForm}>Add a new food</button>
        {this.state.showForm ? (
          <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="write a name"
              value={this.state.name}
              onChange={this.handleInput}
            />

            <label> Calories:</label>
            <input
              type="number"
              placeholder="write a number"
              name="calories"
              value={this.state.calories}
              onChange={this.handleInput}
            />

            <label> Image:</label>
            <input
              type="text"
              placeholder="a url"
              name="image"
              value={this.state.image}
              onChange={this.handleInput}
            />

            <button type="submit">Create a food</button>
          </form>
        ) : null}

        <div className="columns">
          <div className="column">
            {this.state.foods.map((food, i) => {
              return (
                <FoodBox
                  key={i}
                  foodType={food.name}
                  calories={food.calories}
                  image={food.image}
                  addFood={this.addFood}
                  handleQuantity={this.handleQuantity}
                />
              );
            })}
          </div>

          <div className="column content">
            <h2 className="subtitle">Today's foods</h2>
            <ul>
              {this.state.todayFoods.map((food,i) => {
                return (
                  <li key={i}>
                    {food.todayQuantity} {food.todayFoodName} ={' '}
                    {food.todayCaloriesTotal}cal
                    <img
                      onClick={() => this.handleDelete(food.todayFoodName)}
                      style={{ width: '40px' }}
                      src="https://www.creativefabrica.com/wp-content/uploads/2019/02/Trash-Icon-by-Kanggraphic-580x386.jpg"
                      alt=""
                    />
                  </li>
                );
              })}
              {/* <li>1 Pizza = 400 cal</li>
              <li>2 Salad = 300 cal</li> */}
            </ul>
            <strong>Total: {this.state.total}cal</strong>
          </div>
        </div>
      </div>
    );
  }
}
