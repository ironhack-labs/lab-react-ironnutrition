import React, { Component } from 'react'
import foods from '../foods.json'
import AddForm from './AddForm'
import Resume from './Resume'
import FoodList from './FoodList'

export default class FoodContent extends Component {

  constructor() {
    super()
    this.state = {
      showForm: false,
      myFoods: foods,
    }
  }

  /* Resume info */
  addItemQuantity = (name, quantity) => {
    this.state.myFoods.forEach(f => {
      if(f.name === name) f.quantity += parseInt(quantity, 10)
    });
    this.setState({
      myFoods: [...this.state.myFoods]
    })
  }
  deleteItemQuantity = (name) => {
    this.state.myFoods.forEach(f => {
      if(f.name === name) f.quantity = 0
    })
    this.setState({
      myFoods: [...this.state.myFoods]
    })
  }
  
  /* Add Food */
  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }
  addFood = (newFood) => {
    this.setState({
      myFoods: [...this.state.myFoods, newFood]
    }, this.toggleForm)
  }

  render() {
    return (
      <div>
        <div className="columns">
          <div className="column">
            <FoodList addItemQuantity={this.addItemQuantity} myFoods={this.state.myFoods} filter={this.state.filter}/>
          </div>
          <div className="column">
            <Resume deleteQuantity={this.deleteItemQuantity} myFoods={this.state.myFoods}/>
            <button className="button is-danger is-rounded" onClick={this.toggleForm}>Create Food</button>
            {this.state.showForm && <AddForm close={this.toggleForm} add={this.addFood} />}
          </div>
        </div>
      </div>
    );
  }
}
