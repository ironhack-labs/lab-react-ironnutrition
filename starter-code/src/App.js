import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox"
import AddFood from "./components/AddFood"
import Search from "./components/Search";


class App extends Component {
  constructor() {
    super()
    this.state = {
      foods: foods,
      filteredFood: foods
    };
  }

  addFood = food => {
    const foodsSpreadOperator = [...this.state.filteredFood];
    foodsSpreadOperator.push(food);
    this.setState({
      filteredFood: foodsSpreadOperator
    });
  };

  searchFood = foodName => {
    let query = foodName.slice(0, 1).toUpperCase() + foodName.slice(1, foodName.length);
    const foodsSpreadOperator = [...this.state.foods];

    let filtered = foodsSpreadOperator.filter((element) =>{
      return element.name.includes(foodName) || element.name.includes(query)
    })

    this.setState({
      filteredFood: filtered
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="flexbox">
          <section className="addAndSearch">
            <Search  searchFood={this.searchFood}/>
            {this.state.filteredFood.map((food, idx) => {
              return <FoodBox key={idx} {...food} />;
            })}
            <AddFood addFood={this.addFood} />
          </section>
        </div>
      </div>
    );
  }
}

export default App;





