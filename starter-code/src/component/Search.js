import React, { Component } from 'react';

import './Search.css';

import 'bulma/css/bulma.css';

class FoodResearch extends Component {
    constructor() {
      super()
      this.state = {
        FoodArray: [],
        FilteredFood: []
      }
    }
  
    componentWillMount() {
      this.setState({
        FoodArray,
        FilteredFood: FoodArray
      })
    }
  
    filterPoets = (foodFilter) => {
      let FilteredFood = this.state.FoodArray
      FilteredFood = FilteredFood.filter((food) => {
        let foodName = food.firstName.toLowerCase() + food.lastName.toLowerCase()
        return foodName.indexOf(
          foodFilter.toLowerCase()) !== -1
      })
      this.setState({
        FilteredFood
      })
    }
  
    render() {
      return (
        <Poets FoodArray={this.state.FilteredFood} match={this.props.match} onChange={this.filterPoets} />
      )
    }
  }
  
  export default FoodResearch