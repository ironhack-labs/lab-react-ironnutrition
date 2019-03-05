import React, { Component } from 'react';
import logo from './logo.svg';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import TodayFoodList from './components/TodayFoodList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addFood: false,
      foods: foods,
      filteredFoods: foods,
      todayFoods: []
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const calories = e.target.name.value;
    const image = e.target.name.value;
    this.setState({
      foods: [...this.state.foods, { name, calories, image, quantity: 0 }]
    });
  };

  changeAddFoodState = () => {
    this.setState({
      addFood: !this.state.addFood
    });
  };

  setFilteredFoods = filteredFoods => {
    this.setState({
      filteredFoods: filteredFoods
    });
  };

  render() {
    if (this.state.addFood) {
      return (
        <div className="App">
          <form onSubmit={e => this.handleFormSubmit(e)}>
            <label for="name">Name: </label>
            <input type="text" name="name" id="name" />
            <label for="calories">Calories</label>
            <input type="number" name="calories" id="calories" />
            <label for="image">Image: </label>
            <input type="text" name="image" accept="image/*" id="image" />
            <input type="submit" value="Add New Food!" />
          </form>
          <br />
          <Search
            foods={this.state.foods}
            filteredFoods={this.state.filteredFoods}
            setFilteredFoods={this.setFilteredFoods}
          />
          <div className="flex-list">
            <div className="foodLists">
              {this.state.filteredFoods.map((food, index) => {
                return (
                  <div key={index}>
                    <FoodBox {...food} />
                  </div>
                );
              })}
            </div>
            <div className="todaysFoods">
              <TodayFoodList todayFoods={this.state.todayFoods} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <button onClick={this.changeAddFoodState}>Add New Food</button>
          <br />
          <Search
            foods={this.state.foods}
            filteredFoods={this.state.filteredFoods}
            setFilteredFoods={this.setFilteredFoods}
          />
          <div className="flexList">
            <div className="foodLists">
              {this.state.filteredFoods.map((food, index) => {
                return (
                  <div key={index}>
                    <FoodBox {...food} />
                  </div>
                );
              })}
            </div>
            <div className="todaysFoods">
              <TodayFoodList todayFoods={this.state.todayFoods} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
