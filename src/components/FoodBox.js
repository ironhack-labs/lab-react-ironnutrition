import React, { Component } from 'react';

class FoodBox extends Component {
  state = {
    quantity: 0,
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ quantity: Number(value) })
  }

  render() {
    return (
      <div>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.food.image} />
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
                    className="input"
                    type="number"
                    value={this.state.quantity}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={() =>
                      this.props.updateTodaysFood({
                        ...this.props.food,
                        quantity: this.state.quantity,
                      })
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default FoodBox;
