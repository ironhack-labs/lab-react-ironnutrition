import React, { Component } from 'react';

import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foods from './components/Foods';
import Todayfood from './components/Todayfood';
import Search from './components/Search';

class App extends Component {
  state = {
    foods: foods,
    fliterFood: foods,
    total: [],
  };

  handleAddNewFood = (newFood) => {
    this.setState({ foods: [newFood, ...this.state.foods] });
  };

  handleTotalFood = (event, food, count) => {
    event.preventDefault();
    console.log(count);

    let foood = {
      name: food.name,
      calories: Number(food.calories),
      quantity: Number(count),
    };
    this.setState({
      total: [foood, ...this.state.total],
    });
  };

  handleSearch = (event) => {
    console.log(foods);
    let filtredfood = foods.filter((food) => {
      return food.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    console.log(event.target.value);
    this.setState({ fliterFood: filtredfood });
  };

  // handleAddTotal = (event, mybook) => {
  //   //preventing the default behavior of forms
  //   event.preventDefault();
  //   console.log(event.target.quantity.value);
  //   console.log(mybook);
  //   let bookObj = {
  //     title: mybook.title,
  //     price: Number(mybook.price),
  //     quatity: Number(event.target.quantity.value),
  //   };
  //   this.setState({
  //     total: [bookObj, ...this.state.total],
  //   });
  // };

  render() {
    return (
      <>
        <h1>Iron Nutrition </h1>
        <Search onSearch={this.handleSearch} />
        <div className="columns">
          <div className="column">
            <Foods
              foods={this.state.fliterFood}
              onAddNewFood={this.handleAddNewFood}
              handleTotalFood={this.handleTotalFood}
            />
          </div>
          <div className="column">
            <Todayfood totalfood={this.state.total} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
