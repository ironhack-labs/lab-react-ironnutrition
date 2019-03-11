import React, { Component } from 'react'
import foods from '../foods.json'
import SearchBar from './SearchBar'

class FoodBox extends Component {

  state = {
    foods: foods,
    search: '',
    filteredFoods: foods
  }

  showFoods() {
    console.log(this)
    let foodList = this.state.foods.map((food, i) => {
      return (
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={food.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{food.name}</strong> <br />
                  <small>{food.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    value="1"
                  />
                </div>
                <div className="control">
                  <button className="button is-info">
                    +
          </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      )
    })
    return foodList
  }

  addFood = (e) => {
    e.preventDefault();

    let addedFood = {
      name: e.target.food.value,
      calories: e.target.calories.value,
      image: e.target.image.value
    }

    let newFoods = [...this.state.foods]
    newFoods.push(addedFood)

    this.setState({
      foods: newFoods
    })
  }

  handleChange = (e) => {
    e.preventDefault()
    let search = e.target.value
    console.log(search, 'search')
    let filteredFoods = this.state.foods.filter(food => food.name.includes(search))
    console.log(filteredFoods, 'filteredFoods')
    this.setState({
      search,
      foods: filteredFoods
    })
  }
  

  render() {
    return (
      <div>
        <SearchBar handleChange={this.handleChange}/>
        <form onSubmit={this.addFood}>
          <label htmlFor="food">Name</label>
          <input name="food" type="text" />

          <label htmlFor="calories">Calories</label>
          <input name="calories" type="text" />
          
          <label htmlFor="image">Add an Image</label>
          <input name="image" type="text" />

          {/* <input name="food" type="text" onChange={(e) => this.handleChange(e)}/> */}
          <button>Add Food</button>
        </form>
        {this.showFoods()}
      </div>
    )
  }
}

export default FoodBox