import React, { Component } from 'react';
import './foodbox.css'
import foods from '../../foods.json'




class FoodBox extends Component {

  constructor(props){
    super(props)
    this.state = {
      listOfFood: foods
    }
  }

  showFood = () => {
    return(
      this.state.listOfFood.map((eachFood, i)=>{
        return(
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
          )
      })
    )
  }


  render() {
    return(
      <div class="container">
      <h1 class="title">IronNutrition</h1>
      <div>
        <input type="text" class="input search-bar" name="search" placeholder="Search" value=""></input>
      </div>
      <div class="columns">
        <div class="column">
        {this.showFood()}
        </div>
      </div>
    </div>
    )
  }
}



export default FoodBox;
