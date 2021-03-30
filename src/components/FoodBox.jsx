import React, { Component } from 'react';

export class FoodBox extends Component {
  state = {
    quantity: 0,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSelect = (event) => {
    this.props.todayFoods({
      name: this.props.food.name,
      calories: this.props.food.calories,
      image: this.props.food.image,
      quantity: this.state.quantity,
    });
  };

  render() {
    const { name, calories, image } = this.props.food;

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt={name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={this.state.quantity}
                  onChange={this.handleChange}
                />
              </div>
              <div className="control">
                <button
                  onClick={(event) =>
                    this.props.handleSelect(event.target.value)
                  }
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
}

export default FoodBox;
