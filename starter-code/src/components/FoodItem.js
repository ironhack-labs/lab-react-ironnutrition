import React, { Component } from 'react';

class FoodItem extends Component {
  render() {
    const {id, name, calories, quantity} = this.props
    return (
        <li>
          <div className="columns">
          <div className="column">
            {quantity} {name} = {parseInt(calories*quantity).toLocaleString()} cal
          </div>
          <div className="column"><a className="delete is-small" onClick={this.props.onClick}></a></div>
          </div>
        </li>
    );
  }
}

export default FoodItem;
