import React, { Component } from 'react';

class FoodSearch extends Component {

  inputChangeHandler = (event) => {
    this.props.filterFood(event.target.value)
  }

  render() {
    return <input
      className="input is-danger"
      name="search"
      type="text"
      placeholder="Serach for food..."
      onChange={this.inputChangeHandler}
    />
  }
}

export default FoodSearch;
