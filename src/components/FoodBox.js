import React from 'react';
import './FoodBox.css';

class FoodBox extends React.Component {
  state = {
    quantity: 1,
  };

  increaceQuantity = () => {
    this.setState((prevState) => {
      return {
        quantity: prevState.quantity + 1,
      };
    });
  };

  updateQuantity = (event) => {
    const FoodInfo = {
      name: this.props.name,
      calories: this.props.calories,
      quantity: this.state.quantity,
    };

    this.setState(() => {
      return {quantity:1 };
    });

    this.props.addTodayFoodHandler(FoodInfo);
  };

  render() {
    return (
      <div className="food-container">
        <div className="food-container-left">
          {' '}
          <div>
            <img src={this.props.image} alt={this.props.name} />
          </div>
          <div>
            <p>
              <strong>{this.props.name}</strong>
            </p>
            <p>{this.props.calories} cal</p>
          </div>
        </div>
        <div className="food-container-right">
          {' '}
          <div>
            <input
              type="number"
              min={1}
              value={this.state.quantity}
              onChange={this.increaceQuantity}
            />
            <input type="button" onClick={this.updateQuantity} value="+" />
          </div>
        </div>
      </div>
    );
  }
}

export default FoodBox;
