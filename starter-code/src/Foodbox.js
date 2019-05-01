import React, { Component } from "react";

export default class Foodbox extends Component {
  state = {
    name: this.props.name,
    calories: this.props.calories,
    image: this.props.image,
    quantity: this.props.quantity
  };

  updateQty(e){
      if(e.target.value < 1) { return;}
      this.setState({
        ...this.state,
        quantity: e.target.value
      });
  }

  addToMenu() {
    if(this.state.quantity > 0) {
      this.props.addToMenu(this.state)
    }

    this.setState({
      ...this.state,
      quantity: 0
    })
  }

  render() {
    const food = this.state;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} alt={food.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  onChange={(e) => this.updateQty(e)}
                  value={food.quantity}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={() => this.addToMenu()}>
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
