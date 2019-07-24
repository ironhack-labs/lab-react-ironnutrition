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
      search: ''
    }

    this.newFood = this.newFood.bind(this);
    this.search = this.search.bind(this);
  }

  newFood(food) {
    let newFoods = [...this.state.foods];
    newFoods.unshift(food);
    this.setState({
      foods: newFoods
    })
  }

  search(word) {
    this.setState({
      search: word
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
              console.log(word.name.includes(this.state.search))
              return (word.name.includes(this.state.search))
              })
              .map((food, index) => {
              return <FoodBox key={index} name={food.name} image={food.image} calories={food.calories} quantity={food.quantity} />
            })}
          </div>
          <div className="column">
            <TodaysFoods />
          </div>
        </div>
      </div>
    )
  }
}

export default FoodContainer;
