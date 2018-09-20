import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './FoodBox';
import foods from './foods.json'
import Search from './Search.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      foodList: foods,
      userInput:""
    };
  }


  updateFoodList(event) {
    const inputTag = event.target;
    const foodResult = foods.filter(oneFood => oneFood.name.toLowerCase().includes(inputTag.value.toLowerCase()));
    this.setState({ foodList: foodResult, userInput: inputTag.value });
  }

  render() {
    console.table(this.state.foodList);
    const { foodList, userInput } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Search inputValue= { userInput} onFoodSearch={(event) => this.updateFoodList(event)}/>
        {foodList.map((oneFood, index) =>
          <FoodBox key={index} oneFood={ oneFood } />
        )}
      </div>
    );
  }
}

export default App;
