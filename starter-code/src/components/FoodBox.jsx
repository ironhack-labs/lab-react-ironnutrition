import React, { Component } from "react";

export default class FoodBox extends Component {
  state = {
    quantity: 1
  };

  clickHandler = () => {
    this.props.addToTodaysHandler({
      name: this.props.food.name,
      calories: this.props.food.calories,
      quantity: this.state.quantity
    });
  };

  render() {
    const {
      food: { name, calories, image }
    } = this.props;
    return (
      <div>
        <div className="box mb-1">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={image} />
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
                  <input className="input" type="number" min="0" step="1" value={this.state.quantity} onChange={e => this.setState({ quantity: e.target.value })} />
                </div>
                <div className="control">
                  <button className="button is-info" onClick={this.clickHandler}>
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
