import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FoodBoxForm from './components/FoodBoxForm';
import TodaysFoodLine from './components/TodaysFoodLine';

class App extends Component {

  state = {
    food: foods.map((oneFood, index) => { return {...oneFood, index: index} }),
    showAddFood: false,
    searchString: "",
    todaysFood: []
  }

  addFoodListener = (addedFoodObj) => {
    addedFoodObj = { ...addedFoodObj, index: this.state.food.length };
    this.setState({
      food: [...this.state.food, addedFoodObj],
      showAddFood: !this.state.showAddFood
    })
  }

  showForm = () => {
    this.setState({
      showAddFood: !this.state.showAddFood
    })
  }

  searchListener = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  todaysFoodHandler = (foodId, foodQuantity) => {
    //console.log("today: " + foodQuantity)
    this.setState({
      todaysFood: [ ...this.state.todaysFood, 
                    ...this.state.food.filter(oneFood => {
                      if (oneFood.index === foodId) {
                        oneFood.quantity = foodQuantity;
                        return oneFood;
                      }
                    })
                  ]
    })
  }

  filterMyFood = () => {
    if (this.state.searchString === "") {
      return this.state.food.map((oneFood, index) => { return <FoodBox key={index} {...oneFood} todaysFoodHandler={this.todaysFoodHandler} /> });
    }
    else {
      return this.state.food.filter(oneFood => { 
        if (oneFood.name.includes(this.state.searchString)) {
          return oneFood;
        } 
      }).map((oneFood, index) => { return <FoodBox key={index} {...oneFood} todaysFoodHandler={this.todaysFoodHandler} /> });
    }
  }

  render() {
    //console.log(this.state.todaysFood);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <button onClick={() => this.showForm()}>"Add Food record"</button>
          {this.state.showAddFood ? <FoodBoxForm addFood={this.addFoodListener} /> : <div></div>}
        </div>
        <div>
          <input type="text" name="searchString" value={this.state.searchString} onChange={this.searchListener} />
        </div>
        <div className="mainBody">
          <div className="App-intro">
            {this.filterMyFood()}
          </div>
          <div className="todaysFoods">
            <p><b>Today's foods</b></p>
            <ul>
              {/* user defined tag for li and calculation */}
              
              {this.state.todaysFood.map(oneTodayFood => { return <TodaysFoodLine {...oneTodayFood} />}) }
            </ul>
            <p>Total: {this.state.todaysFood.reduce(function(acc, curr) { return acc + curr.calories; },0)} cal</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
