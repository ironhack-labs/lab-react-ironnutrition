import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import CalcCalories from './components/CalcCalories';

class App extends Component {
  state = {
    foods: foods,
    onForm: false,
    searchName: "",
    todayFood: [],
    totalCalories: 0,
  }

  showForm = (e) => {
    e.preventDefault();
    this.setState({onForm: true});
  }

  addFood = (newFood) => {
    let foodsCopy = [...this.state.foods];
    foodsCopy.unshift(newFood);

    this.setState({foods: foodsCopy, onForm: false});
  }

  searchFunction = (e) => {
    let {name, value} = e.target;

    this.setState({[name]: value})

  }

  addTodayFood = (newFood) => {
    let todayFoodCopy = [...this.state.todayFood];
    todayFoodCopy.push(newFood);

    let counter = this.state.totalCalories;

    todayFoodCopy.forEach((food) => {
      counter += food.calories;
    });
    console.log(counter)

    this.setState({todayFood: todayFoodCopy, totalCalories: counter});
  }

  render() {
    return (
      <div className="App">
        <CalcCalories foodList={this.state.todayFood} totalCalc={this.state.totalCalories}/>
        <button onClick={this.showForm}>Add new food</button>
        
        {this.state.onForm && <AddFoodForm addNewFood={this.addFood}/>}

        <br></br>
        
        <input type="text" name="searchName" placeholder="Search by name" value={this.state.searchName} onChange={this.searchFunction}/>

        {this.state.foods.map((food) => {
          if (food.name.toLowerCase().includes(this.state.searchName)) {
            return <FoodBox addInCaloriesCounter={this.addTodayFood}
                            {...food}
                            key={food.name}/> 
          }
        })}
      </div>
    );
  }
}

export default App;
