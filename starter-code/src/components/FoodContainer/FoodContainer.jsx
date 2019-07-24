import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar'
import NewFood from '../NewFood/NewFood'
import FoodBox from '../FoodBox/FoodBox'
import TodaysFoods from '../TodaysFoods/TodaysFoods'
import foods from '../../foods.json'

class FoodContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [...foods],
      search: '',
      todayFoods: []
    }

    this.newFood = this.newFood.bind(this);
    this.search = this.search.bind(this);
    this.addTodayFood = this.addTodayFood.bind(this);
  }

  newFood(food) {
    let newFoods = [...this.state.foods];
    newFoods.unshift(food);
    this.setState({
      foods: newFoods,
      todayFoods: []
    })
  }

  search(word) {
    this.setState({
      search: word
    })
  }

  addTodayFood(food) {
    let newTodayFoods = [...this.state.todayFoods]
    newTodayFoods.push(food);
    this.setState({
      todayFoods: newTodayFoods
    })
  }

  render() {
    return  (
      <div>
        <SearchBar search={this.search} />
        <NewFood addFoodHandler={this.newFood}/>
        <div className="columns">
          <div className="column">
            {this.state.foods.filter(word => {
              return (word.name.includes(this.state.search))
              })
              .map((food, index) => {
              return <FoodBox onClick={() => this.addTodayFood(food)} key={index} name={food.name} image={food.image} calories={food.calories} quantity={food.quantity} />
            })}
          </div>
          <div className="column">
            <ul>
              <TodaysFoods foods={this.state.todayFoods} />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default FoodContainer;
