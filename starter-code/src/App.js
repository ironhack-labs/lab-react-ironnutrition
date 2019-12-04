import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json'
import Form from './components/Form';
import DailyList from './components/DailyList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: foods,
      shownfoods: foods,
      dailylist: [],
      formtoggle: false,
      totalcalories: 0,
    };
  }
  addform = (e) => {
    e.preventDefault();
    let formtoggle = !this.state.formtoggle;
    this.setState({ formtoggle });
  }
  addFood = (food) => {
    const foodsCopy = this.state.foods;
    let formtoggle = !this.state.formtoggle;
    foodsCopy.push(food);
    this.setState({ foods:foodsCopy ,formtoggle });
  }
  handleSearch = (e) => {
    let value = e.target.value;
    let foods = this.state.shownfoods;
    if(value === '') {
      foods = this.state.foods;
    } else {
        var arr = [];
        this.state.foods.forEach( (x) => {
          if(x.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
            arr.push(x);
          }
        }) 
        foods = arr;
    }
    this.setState({ shownfoods:foods});
  }
  addToDaily = (food) => {
    const dailyCopy = this.state.dailylist;
    dailyCopy.push(food)
    this.calculateCalories();
    this.setState({ dailylist:dailyCopy});
  }
  calculateCalories = () => {
    this.state.dailylist.forEach( (element) => {
      let num = this.state.totalcalories;
      num = num + (element.number * element.calories)
      this.setState({ totalcalories: num });
  }
)}
  render() {
    return (
      <div className="App">
      <h1>IronNutrition</h1>
      <input onChange ={this.handleSearch}></input>
      <form onSubmit={this.addform}>
        <button className = 'addbutton'>Add a food</button>
      </form>
      <Form 
        toggle= {this.state.formtoggle}
        addFood={this.addFood}
      />
        {this.state.shownfoods.map((food, i) => {
            return (
              <FoodBox
                key= {i}
                {...food}
                addToDaily = {this.addToDaily}
              />
            );
          })}
          <h1>Today's Foods</h1>
          <ul>
          {this.state.dailylist.map((listItem, i) => {
            return (
              <DailyList
                key= {i}
                {...listItem}
              />
            );
          })}
          <li>Total Calories: {this.state.totalcalories}</li>
          </ul>
          
      </div>
    );
  }
}

export default App;
