import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import FoodLi from './FoodLi';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      foods: foods,
      foodList: [{
        "name": "Pizza",
        "calories": 400,
        "image": "https://i.imgur.com/eTmWoAN.png",
        "quantity": 0
      }]
    }

    this.addItem = this.addItem.bind(this);
  }

  addItem(idx){
    let newFood = this.state.foodList;
    newFood.push(this.state.foods[idx]);
    this.setState({foodList: newFood})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">IronNutrition</h1>
          <div>
            <input type="text" className="input search-bar" name="search" placeholder="Search" />
          </div>
          <div className="columns">
            <div className="column">
              {
                this.state.foods.map((item, idx) => {
                  return <FoodBox key={idx} idx={idx} item={item} addItem={this.addItem} />
                })
              }
            </div>
            <div class="column content">
              <h2 class="subtitle">Today's foods</h2>
              <ul>
                {
                  this.state.foodList.map((item, idx) => {
                    return <FoodLi key={idx} idx={idx} item={item}/>
                  })
                }
              </ul>
              <strong>Total: 700 cal</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
