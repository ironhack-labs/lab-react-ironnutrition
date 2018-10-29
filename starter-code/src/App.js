import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      menu : foods,
      myFoodList : [],
    }
    console.log(this.state.menu)
  }

  addFoodHandler = (theFood) => {
    const menuCopy = [...this.state.menu];
    menuCopy.push(theFood);
    this.setState({
      menu: menuCopy
    })
  }

  deleteFoodHandler = (foodIndex) => {
    const foodListCopy = [...this.myFoodList];
    foodListCopy.splice(foodIndex, 1);
    this.setState({
      myFoodList: foodListCopy 
    })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      <FoodForm addTheFood={this.addFoodHandler} />
      {
        this.state.menu.map((foodItem, index) => {
          return <FoodBox key={index} {...foodItem} clickToDelete={() => this.deleteFoodHandler(index)} />
        })
      }
      {  
        this.state.myFoodList.map((foodItem, index) => {
          return <FoodBox key={index} {...foodItem} clickToDelete={() => this.deleteFoodHandler(index)} />
        })
      }
      </div>
    );
  }
}

export default App;
