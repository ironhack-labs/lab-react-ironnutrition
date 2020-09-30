import React, { Component } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FoodList from './components/FoodList';
import Search from './components/Search';
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  state = {
    foods,
    filteredFoodList: foods,
    foodList: []
  }

  searchFilter = async (event) => {
    const filteredFoods = this.state.foods.filter(food => food.name.toLowerCase().includes(event.toLowerCase()));
    await this.setState({
      filteredFoodList: filteredFoods
    })
  }
  
  addFood = async (food) => {

    // Bonus iteration 6 still in progress
    console.log(food)
    const isFoodInList = this.state.foodList.length !== 0 ? this.state.foodList.filter(ele => ele.name === food.name) : 0;
    console.log(isFoodInList)

    const newFoodList = [...this.state.foodList, food];
    await this.setState({
      foodList: newFoodList
    });
  }



  render() {
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <Search onChange={this.searchFilter} />
        <div className="columns">
          <div className="column">
              {this.state.filteredFoodList.map(food => 
                <FoodBox onSubmit={this.addFood} key={food.name} item={food}/>
              )}
          </div>
          <div className="column content">
            <FoodList list={this.state.foodList}/> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
