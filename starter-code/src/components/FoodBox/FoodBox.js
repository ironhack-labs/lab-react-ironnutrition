import React, { Component } from 'react';
import FoodLine from '../FoodLine';
import NewForm from '../NewForm';

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodQnt: {},
      add: false,
      newItemName: '',
      newItemCal: '',
      newItemUrl: '',
    }
    let foodQnt = this.state.foodQnt;
    this.props.food.map((f) => {
      return foodQnt[f.name] = f.quantity
    })
    if (foodQnt) {
      this.state.foodQnt = foodQnt
    }
  }

  toggleForm = () => {
    let newState = !this.state.add
    this.setState({
      add: newState
    })
  }

  updateQnt = (event, name) => {
    const state = this.state
    state.foodQnt[name] = event.target.value
    this.setState(
      state
    )
  }

  updateNewItem = (event) => {
    let updateState = this.state
    let newName = event.target['name']
    let newValue = event.target.value
    updateState[newName] = newValue
    this.setState(updateState)
  }

  addNewItemToList = (event) => {
    event.preventDefault() 
    this.props.addFood(this.state.newItemName, this.state.newItemCal, this.state.newItemUrl)
    let foodQnt = this.state.foodQnt
    foodQnt[this.state.newItemName] = 0

    this.setState(
      {foodQnt: foodQnt}
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleForm}>Toggle Form</button>
        {this.state.add && <NewForm
          newItemName={this.state.newItemName}
          newItemCal={this.state.newItemCal}
          newItemUrl={this.state.newItemUrl}
          updateNewItem={this.updateNewItem}
          addNewItemToList={this.addNewItemToList}
        />}
        {this.props.food.map((f, i) => {
          return (
            <FoodLine f={f} key={i} updateQnt={this.updateQnt} qntValue={this.state.foodQnt[f.name]} />
          )
        })}
      </div>
    )
  }
}

export default FoodBox;