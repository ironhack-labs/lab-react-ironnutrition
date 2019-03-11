import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from '../foods.json'
import AddFood from './AddFood'

class FoodBox extends Component 
{
  state = {
    foods: foods,
    filteredFoods: foods,
    searchedItem: "",
  }

  showFoods = () => 
  {
    let listItems = this.state.filteredFoods.map((item, i) => 
    {
      return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={item.image}/>
            </figure>
          </div>
          
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{item.name}</strong> <br />
                <small>{item.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                  <input
                    className="input"
                    type="number" 
                  />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.addQuantity}>
                +
                </button>
              </div>
              <br/>

            </div>
          </div>
        </article>
      </div>
      )
    })
    return listItems;
  }


  addFood = (e) => {
    e.preventDefault()

    let newFood = {
      name:       e.target.foodName.value,
      calories:   e.target.foodCalories.value,
      image:      e.target.foodImage.value,
    }

    let newFoodList = [...this.state.foods]
    newFoodList.push(newFood)
    this.setState({
      foods: newFoodList
    })

    console.log("added food", e.target.foodName.value)
    return 
  }

  handleChange = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    let searchedItem = e.target.value

    let filteredFoods = this.state.foods.filter(food => food.name.toLowerCase().includes(searchedItem.toLowerCase()))
    this.setState({
      filteredFoods: filteredFoods,
      searchedItem
    })
  }

  render() {
    return (
      <div>
        <label> Search: </label>
        <input type="search" onChange={this.handleChange}></input>

        <form className="new-food" onSubmit={this.addFood}>
          <label>name: </label>
          <input type="text" name="foodName" ></input>

          <label> calories: </label>
          <input type="text" name="foodCalories" ></input>

          <label> image: </label>
          <input type="text" name="foodImage" ></input>

          <input type="submit" />
        </form>
        <AddFood />
        
        {this.showFoods()}
      </div>
    )
  }
}

export default FoodBox;
