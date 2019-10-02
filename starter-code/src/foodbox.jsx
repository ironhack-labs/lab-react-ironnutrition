import React, { Component } from 'react'
import foods from "./foods.json"
import { throws } from 'assert'

class FoodBox extends Component {

  state = {
    foodsList: foods,
    name: foods.name,
    calories: foods.calories,
    images: foods.images,
    quantity: foods.quantity
  }


  showListOfFoods = () => {
    console.log(this.state.foodsList)
    let listOfFoods = this.state.foodsList.map((eachFood,i)=> {
    let list =
      <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={eachFood.image} width="100px" height="80px"/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{eachFood.name}</strong> <br />
              <small>{eachFood.calories} cal</small>
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
  return list;
    })
    return listOfFoods;
  }

  setForm = (event) => {
    this.setState({
        [event.target.value]:event.target.value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
  }
  

render () {
  return (
      <div>
        <table>{this.showListOfFoods()}</table>
        <form onSubmit={this.handleFormSubmit}>
            <label>Name:</label>
            <input type="text" name="name" onChange={this.setForm} />
            <label>Calories:</label>
            <input type="text" name="calories" onChange={this.setForm} />
            <label>Image:</label>
            <input type="text" name="images" onChange={this.setForm} />
            <input type="submit" value="Submit" />
        </form>
        {/* <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" onChange={this.handleFormSubmit}/>
          <input type="submit" value="Submit"/>
          </form> */}
      </div>
    )
  }
}

export default FoodBox;