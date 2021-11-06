import React from "react";
import './FoodBox.css'

class FoodBox extends React.Component {

    state ={
        quantity: this.props.quantity
    }

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
                <input type="number" value="1" />
              </div>
              <div>
                <button>+</button>
              </div>
            </div>
          </div>
        );
    }
}


export default FoodBox