import React, { Component } from 'react';
import logo from './logo.svg';
import foods from './foods.json'
import FoodBox from './FoodBox.js';
import AddFood from './AddFood.js';
import 'bulma/css/bulma.css';
import './App.css';



class App extends Component {
  constructor() {
    super();

    this.state = {
      allFoods: foods,
      enableForm: false,
      todayFoods: [],
      total: 0
    };
  }

  toggleForm = () => {
    this.setState({ enableForm: !this.state.enableForm });
  };


  addFood = food => {
    this.state.allFoods.unshift(food);
    this.setState({
      allFoods: this.state.allFoods,
      enableForm: !this.state.enableForm
    });
  };

  search = val => {
    let filter = foods.filter((food) => {
      return food.name.toLowerCase().includes(val)
    });
    this.setState({ allFoods: filter })
  }

  todayTotal  = food => {
    this.state.todayFoods.push(food);
    this.setState({todayFoods: this.state.todayFoods, total: this.state.total + food.calories})
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronNutrition</h1>
        </header>

        <div>
          <input
            type="text"
            className="input search-bar"
            name="search"
            onKeyUp={(e) => { this.search(e.target.value) }}
            placeholder="Search"
            defaultValue=""
          />
        </div>

        <div className="level-center">

          {!this.state.enableForm &&
            <button className="button is-primary" onClick={this.toggleForm}>
              Add food
                </button>
          }
        </div>
        {this.state.enableForm &&
          <AddFood newFood={food => this.addFood(food)} />
        }
        {this.state.allFoods.map((e) => {
          return <FoodBox key={e.name} {...e} todayTotal={food => this.todayTotal(food)}/>
        })}
        <div class="column content">
          <h2 class="subtitle">Today's foods</h2>
          
          <ul>
                  {this.state.todayFoods.map((e) => {
                  return <li > {e.name}{e.calories} </li> 
                  })}
                </ul>
                <p>Total: {this.state.total}</p>
        </div>

      </div>
    );
  }
}


export default App;
