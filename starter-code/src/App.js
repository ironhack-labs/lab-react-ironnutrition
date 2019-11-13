import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/foodbox-component/foodbox';
import SearchBox from './components/search-component/search'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foods: foods,
      filteredFoods: foods,
      newFood: {
        name: "",
        calories: 0,
        image: "",
        quantity: 0
      },
      formDisplayed: false,
      foodsEaten: {},
      totalCal: 0,
      
    }
  }

  showFoods = () => {
    return this.state.filteredFoods.map((eachFood, i) => {
      return (
        // <div key={i}>
          <FoodBox deleteFood={this.deleteFood} eatFood={this.eatFood} theFood={eachFood} key={i}/>
        // </div>
      ) 
    })
  }

  toggleForm = () => {
    this.setState({
      formDisplayed: !this.state.formDisplayed
    })
  }

  updateFood = (e) =>{
    let foodUpdate = {...this.state.newFood}
    foodUpdate[e.target.name] = e.target.value;
    this.setState({
      newFood: foodUpdate,
    })
  }

  addFood = (e) => {
    e.preventDefault();
    let newFood = {...this.state.newFood};
    let updatedFilteredFoods = [...this.state.filteredFoods];
    let updatedFoods = [...this.state.foods];
    updatedFoods.push(newFood);
    updatedFilteredFoods.push(newFood);
    this.setState({
      foods: updatedFoods,
      filteredFoods: updatedFilteredFoods,
    }, () => {
      let foodClear = {
        name: "",
        calories: 0,
        image: "",
        quantity: 0
      };
      this.setState({
        newFood: foodClear
      })
    }, this.toggleForm())  
  }

  filterList = (searchString) => {
    let fullList = [...this.state.foods];
    let filteredList = fullList.filter(food => food.name.toLowerCase().includes(searchString.toLowerCase()) );
    this.setState({
      filteredFoods: filteredList,
    })
  }


  eatFood = (name, cals, amount) => {
    if (this.state.foodsEaten[name]){
      let updatedFoods = {...this.state.foodsEaten};
      updatedFoods[name].amount += amount;
      this.setState({
        foodsEaten: updatedFoods
      })
    } else {
      let updatedFoods = {...this.state.foodsEaten};
      updatedFoods[name] = {
        name: name,
        amount: amount,
        cals: cals
      };
      this.setState({
        foodsEaten: updatedFoods,
        totalCal: this.state.totalCal + (amount * cals)
      })
    }
  }

  deleteFood = (foodName) => {
    let updatedFilteredFoods = [...this.state.filteredFoods];
    let updatedFoods = [...this.state.foods];
    let foodIndex = false;
    for (let i = 0; i < updatedFoods.length; i++) {
      if (updatedFoods[i].name === foodName) {
        foodIndex = i;
      }
    }
    updatedFoods.splice(foodIndex, 1);
    foodIndex = false;
    for (let i = 0; i < updatedFilteredFoods.length; i++) {
      if (updatedFilteredFoods[i].name === foodName) {
        foodIndex = i;
      }
    }
    if (foodIndex !== false) {
      updatedFilteredFoods.splice(foodIndex, 1);
    }
    this.setState({
      foods: updatedFoods,
      filteredFoods: updatedFilteredFoods,
    })
  }

  showFoodEaten = () => {
    if (Object.keys(this.state.foodsEaten).length > 0){
      let totalCalories = 0;
      let returnValue = Object.keys(this.state.foodsEaten).map((eachFood, i) => {
        let calories = Number(this.state.foodsEaten[eachFood].amount) * Number(this.state.foodsEaten[eachFood].cals);
        totalCalories += calories;
        if (this.state.foodsEaten[eachFood].amount > 1) {
          return (
            <li>
              {this.state.foodsEaten[eachFood].amount} {this.state.foodsEaten[eachFood].name}s = {calories} cal
            </li>
          )
        } else {
          return (
            <li>
              {this.state.foodsEaten[eachFood].amount} {this.state.foodsEaten[eachFood].name} = {calories} cal
            </li>
          )
        }
      })
      return returnValue
    }
  }






  render() {
    console.log(this.state.foodsEaten.keys)
    return (
      <div className="App">
        <div className="columns">
            <div className="column is-5 main-wrapper">
              <h1>IronNutrition</h1>
              <div className="add-search">
                <button className="button" onClick={() => {this.toggleForm()}}>Add a new food</button>
                <SearchBox filterFunction={this.filterList}/>
              </div>
              {this.showFoods()}
            </div>
          <div className="column is-2"></div>
          <div className="column is-5 foods-eaten">
            <h1>Today's foods</h1>
            <ul>
              {this.showFoodEaten()}
            </ul>
            <br/>
            <h2>Total: {this.state.totalCal} cal</h2>
            

          </div>
          {this.state.formDisplayed && 
            <div className="new-food">
              <button onClick={this.toggleForm}>X</button>
              <form onSubmit = {this.addFood}>
                <h3>Add a new food</h3>
                <p>Name of Food</p>
                <input type="text" value={this.state.newFood.name} name="name" onChange = {this.updateFood} />
                <p>Number of Calories</p>
                <input type="number" value={this.state.newFood.calories} name="calories" onChange = {this.updateFood} />
                <p>Link to image</p>
                <input type="text" value={this.state.newFood.image} name="image" onChange = {this.updateFood} />
                <button>Add food</button>
              </form>
            </div>
            }
        </div>
      </div>
    );
  }
}

export default App;
