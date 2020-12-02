import React, { Component } from 'react'
import FoodBox from '../foodbox/Foodbox'
import foodApi from '../../foods.json'
import CreateForm from '../create-form/CreateForm'
import SearchInput from '../search/SearchInput'

class FoodList extends Component {
  constructor () {
    super()
    this.state = {
      foods: foodApi
    }
  }
  showForm = () => alert('formulario!!')

  insertFood = newFood => {
    const foodsCopy = [ ...this.state.foods ]
    foodsCopy.push(newFood)
    this.setState({ foods: foodsCopy })
  }

  searchFood = value => {
    let newState = [ ...this.state.foods ].filter(elm => elm.name.includes(value))
    this.setState({ foods: newState })
  }


  render() {
    return (
      <div>
        
        <SearchInput searchFood={ this.searchFood } />

        <button className="button is-info" onClick={ this.showForm }>Add new food</button>
        <CreateForm addFood={ this.insertFood} />

        <hr />
        
        { this.state.foods.map((elm, idx) => <FoodBox key={idx} {...elm} />) }

      </div>
    )
  }
}

export default FoodList