import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import foods from './foods.json'

export default class FoodBox extends Component {
  state = {
    foodList: foods
  }

showListOfFoods=()=>{
  let listOfFoods= this.state.foodList.map((eachFood,i)=> {
  console.log(eachFood.name)
  return (
  <div className="box">
    <article className="media">
    <div className="media-left">
    <figure className="image is-64x64">
      <img src={eachFood.image} />
    </figure>
    </div>
    <div className="media-content">
    <div className="content">
      <p>
        <strong>{eachFood.name}</strong> <br />
    <small>{eachFood.calories}</small>
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
    
    </button>
  </div>
</div>
</div>
</article>
</div>
  )
})
return listOfFoods

}
  render() {
    return (
      <div>
      {this.showListOfFoods()}
      </div>
    )
  }
}
