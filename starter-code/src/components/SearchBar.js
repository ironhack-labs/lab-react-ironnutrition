import React, { Component } from 'react';
import FoodBox from './FoodBox';
import Foods from '../foods.json';


class SearchBar extends Component {

    state = {
      foodFilter: "",
      listFood: Foods,
    }

    renderFood = food => {
      const { foodFilter } = this.state;
      if (foodFilter !== "" && food.name.toLowerCase().indexOf( foodFilter.toLowerCase() ) === -1) {
        return null
      }
    
      return (
            <FoodBox image={ food.image } name={ food.name } calories={ food.calories } />
      )
    }
  

  handleFilter = event => {
    this.setState({
      foodFilter: event.target.value
    })
  }

  render() {
    // const { foodFilter } = this.state;
    // const filteredFood = Foods.filter(food => {
    //   return food.name.toLowerCase().indexOf( foodFilter.toLowerCase() ) !== -1
    // })
    return (
      <div>
        <div>
          <label htmlFor="filter">Search: </label>
          <input type="text" id="filter" 
          value={this.state.foodFilter} 
          onChange={this.handleFilter} placeholder="Filter by word"/>
        </div>
        {
        Foods.map( food => {
          return this.renderFood(food)
        })  
        }

      </div>
      
    )
  }
}

export default SearchBar;