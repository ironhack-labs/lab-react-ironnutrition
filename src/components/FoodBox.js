import { render } from '@testing-library/react';
import React from 'react';

// It takes food as a prop and displays a box with all the info about an ingredient.
class FoodBox extends React.Component {
  state = {
    quantity: 1,
  };

  handleChange = (event) => {
    this.setState({
      quantity: Number(event.target.value),
    });
  };

  render() {
    const { name, calories, image } = this.props.food;
    const { quantity } = this.state;

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.food.image} alt={this.props.food.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  onChange={this.handleChange}
                  className="input"
                  type="number"
                  value={quantity}
                />
              </div>
              <div className="control">
                <button
                  onClick={()=> this.props.handleAddCalories(
                    this.props.food,
                    quantity
                  )}
                  className="button is-info"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
};

export default FoodBox;
