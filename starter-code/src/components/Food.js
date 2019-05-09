import React, { Component } from 'react';
import foods from '../foods.json'
import {copy} from '../App'

export default class Food extends Component  {

  addFood = (food) =>{
    this.setState((prevState) =>{
      return({
        foods:[...prevState.foods, food]
      })
    })
  }

  todayFood = (key) =>{
    let foodInfo = []
    
      return(
        <div>
          <h3>{this.name}</h3>
          <p>{this.index}</p>
          <p>{this.calories} calories</p>
        </div>
      )
  }
   FoodDetails = (props) => {
    const {name} = copy
    const getfood = (name) => {
      const theFood = oneFood => {
        return oneFood.name === name;
      }
      return copy.find(theFood)
    }
    const {params} = props.match
    const foundFood = getfood(params.id,10)
    return (
      <div></div>
    )
  }

  render(){
    return(
      <div>
      {copy.map((food, index) =>
        <div className="box" key={index}>
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} alt={food.name}/>
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
                  type="Number" 
                  name="quantity"
                  value={food.quantity}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.value +1}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
      )}
      </div>
    )
    
  }
}

