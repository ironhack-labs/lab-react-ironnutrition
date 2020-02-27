import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import CalcCalories from './components/CalcCalories';
import SearchBar from './components/SearchBar';

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

    let counter = 0;

    todayFoodCopy.forEach((food) => {
      counter += food.totalCal;
    });

    this.setState({todayFood: todayFoodCopy, totalCalories: counter});
  }

  findWord = (word) => {
    this.setState({searchName: word});
  }

  render() {
    return (
      <div className="App">
        <CalcCalories foodList={this.state.todayFood} totalCalc={this.state.totalCalories}/>
        <button onClick={this.showForm}>Add new food</button>
        
        {this.state.onForm && <AddFoodForm addNewFood={this.addFood}/>}

        <br></br>
        
        <SearchBar searchWord={this.findWord} />

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
