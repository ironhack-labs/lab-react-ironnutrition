import React, { Component } from 'react'

class FoodSearch extends Component {

  inputFilterHandler = (event) => {
    this.props.filterFood(event.target.value);
  }

  render() {
    return (
      <input className="input is-danger" name="search" type="text" placeholder="search for food here..." onChange={this.inputFilterHandler} />
    )
  }
}

export default FoodSearch;


