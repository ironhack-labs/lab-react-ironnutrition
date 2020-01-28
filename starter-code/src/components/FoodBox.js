import React, { Component } from 'react';
import foods from '../foods.json';
import AddFood from './AddFood';
import mongoose from "mongoose";
import SearchFood from './SearchFood';

export default class FoodBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      foods: foods,
      searchData: ''
    }
  }

  addFoodHandler = (theFood) => {
    theFood._id = new mongoose.Types.ObjectId();
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(theFood);
    this.setState({
      foods: foodsCopy
    })
  }

  handleChange = event => {
    let { name, value } = event.target
    this.setState({ [name]: value })
  }

  searchDataChangeHandler = (event) => {
    console.log(event.target.value)
    this.setState({
      foods: foods.filter(food =>
        food.name.toLowerCase().includes(event.target.value.toLowerCase()))
    })
  }

  render () {
    return (
      <div>
      <SearchFood searchDataCHandler={this.searchDataChangeHandler}/>
      <AddFood addFood={this.addFoodHandler}/>
      <div className='App'>
        {this.state.foods.map(food => (
          <div className='box'>
            <article className='media'>
              <div className='media-left'>
                <figure className='image is-64x64'>
                  <img src={food.image} />
                </figure>
              </div>
              <div className='media-content'>
                <div className='content'>
                  <p>
                    <strong>{food.name}</strong> <br />
                    <small>{food.calories} cal</small>
                  </p>
                </div>
              </div>
              <div className='media-right'>
                <div className='field has-addons'>
                  <div className='control'>
                    <input className='input' type='number' value='1' />
                  </div>
                  <div className='control'>
                    <button className='button is-info'>+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )
      )}</div>
    </div>
    );
  }
}
