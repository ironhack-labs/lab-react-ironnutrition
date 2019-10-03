import React, { Component } from 'react'
// import foods from "./foods.json"
// import { throws } from 'assert'


class FoodBox extends Component {

  state = {
    quantity: 0
  }
  showListOfFoods = () => {
    console.log(this.props.foodList)
    let listOfFoods = this.props.foodList.map((eachFood,i)=> {
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
            <input className="input" type="number" onChange={(e) => {this.setState({quantity:e.target.value})}} />
            </div>
            <div className="control">
              <button onClick={() => {this.props.addToList({ ... this.props, ... this.state,})}} className="button is-info">
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

render () {
  return (
      <div>
        <table>{this.showListOfFoods()}</table>
      </div>
    )
  }
}

export default FoodBox;