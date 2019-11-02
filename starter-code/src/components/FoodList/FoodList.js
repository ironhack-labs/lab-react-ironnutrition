import React, { Component } from 'react';

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: this.props.list,
    }
  }

  render() {
    const { foodList } = this.state;
    return (
      <ul>
        Today's foods
        {
          Object.keys(foodList).map((food, idx) => {
            return (
              <li key={idx}>
                {foodList[food].qty} {foodList[food].name}
              </li>
            )
          })
        }
        <p>
          Total Calories: {this.props.totalCalories} cal
        </p>
      </ul>
    );
  }
};

export default FoodList;
