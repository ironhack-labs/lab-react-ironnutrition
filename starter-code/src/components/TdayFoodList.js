import React, { Component } from "react";

export default class TdayFoodList extends Component {
  constructor() {
    super();
    this.state = {
      foodList: [],
      allCalories:[],
      total: 0
    };
  }

  componentDidMount() {
    this.setState({
      foodList: this.props.foodList
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      foodList: nextProps.foodList
    });
  }

  
  render() {
    
    return (
      <div className="content">
        <ul>
          {this.state.foodList.map(food => (
            <li key={food.name}>
              {food.quantity} {food.name} = {food.calories} cal
            </li>
          ))}
        </ul>
        
        <div className="content">
          <p>Total:</p>
        </div>
      </div>
    );
  }
}
