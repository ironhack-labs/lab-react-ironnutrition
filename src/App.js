import React, { Component } from 'react';

import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox.component';
import NewFood from './components/NewFood.component';
import TodayFoods from './components/TodayFoods.component';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      foodList : foods,
      todayFoods : []
    };
  }

  addFood = (newFood) =>
    {
    const copyFood = [...this.state.foodList]
   
    copyFood.push(newFood)
    this.setState({
      foodList : copyFood}
    )
  }



  addToToday = (food )=>
   { const copyFood = [...this.state.todayFoods]
     copyFood.push(food)
     this.setState({
       todayFoods: copyFood
     });
}
  



  searchFood = (e) => {
  let copyFood = [...this.state.foodList];  
  let inputSearch = e.target.value
  
  let newCopy = copyFood.filter((elem) => elem.name.includes(inputSearch));
      this.setState({
        foodList: newCopy,
      });
  }

  render() {
    return (
      <div className="App">

        <div className="foodList">
          <input type="text" className="input" onChange={this.searchFood} />
          {this.state.foodList.map((elem) => {
            return (
              <FoodBox
                key={elem.name}
                foodElement={elem}
                addToToday={this.addToToday}
              />
            );
          })}
          <NewFood addFood={this.addFood} />
          <button>Create New</button>
        </div>
        <div className="todayFood">
          {this.state.todayFoods.map(elem => {
            return  <TodayFoods foodie={elem}></TodayFoods>;
          })}
        </div>
      </div>
    );
  }
}
