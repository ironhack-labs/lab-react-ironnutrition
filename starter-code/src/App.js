import React, { Component } from 'react';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import TodayFoodList from './components/TodayFoodList';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      addFood: false,
      foods: foods,
      filteredFoods: foods,
      todayFoods: []
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const calories = e.target.calories.value;
    const image = e.target.image.value;
    this.setState({
      foods: [...this.state.foods, {name, calories, image, quantity: 0}],
      filteredFoods: [...this.state.foods, {name, calories, image, quantity: 0}]
    });
    this.changeAddFoodState();
  }
  
  changeAddFoodState = () => {
    this.setState({
      addFood: !this.state.addFood
    });
  }

  setFilteredFoods = (filteredFoods) => {
    this.setState({
      filteredFoods: filteredFoods
    });
  }

  addTodayFoods = (newFood) => {
    const existingIndex = this.state.todayFoods.findIndex(todayFood => todayFood.name === newFood.name);
    if(existingIndex === -1){
      this.setState({
        todayFoods: [...this.state.todayFoods, newFood]
      });
    } else{
      const copyTodayFoods = [...this.state.todayFoods];
      copyTodayFoods[existingIndex].quantity = Number(copyTodayFoods[existingIndex].quantity) + Number(newFood.quantity);
      this.setState({
        todayFoods: [...copyTodayFoods]
      });
      
    }
    
  }

  render() {
    if(this.state.addFood){
      return (
        <div className="App">
          <h1 className="title is-2">IronNutrition</h1>
          <form onSubmit={(e) => this.handleFormSubmit(e)}>
            <label for="name">Food Name: </label>
            <input type="text" name="name" id="name" required></input>
            <label for="calories">Food Calories: </label>
            <input type="number" name="calories" id="calories" required></input>
            <label for="image">Food Image: </label>
            <input type="text" name="image" id="image" required></input>
            <input type="submit" value="Add New Food!"></input>
          </form>
          <br></br>
          <Search foods={this.state.foods} filteredFoods={this.state.filteredFoods} setFilteredFoods={this.setFilteredFoods}/>
          <div className="columns">
            <div className="column">
              {this.state.filteredFoods.map((food,index) => {
                return (
                    <FoodBox {...food} key={index} index={index} addTodayFoods={this.addTodayFoods}/>
                );
              })}
            </div>
            <div className="column">
              <TodayFoodList todayFoods={this.state.todayFoods}/>
            </div>
          </div>
        </div>
      );
    } else{
      return (
        <div className="App">
          <h1 className="title is-2">IronNutrition</h1>
          <button onClick={this.changeAddFoodState}>Add New Food</button>
          <br></br>
          <Search foods={this.state.foods} filteredFoods={this.state.filteredFoods} setFilteredFoods={this.setFilteredFoods}/>
          <div className="columns">
            <div className="column">
              {this.state.filteredFoods.map((food,index) => {
                return (
                    <FoodBox {...food} key={index} index={index} addTodayFoods={this.addTodayFoods}/>
                );
              })}
            </div>
            <div className="column">
              <TodayFoodList todayFoods={this.state.todayFoods}/>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
