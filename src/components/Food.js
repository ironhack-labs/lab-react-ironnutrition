import React, { Component } from 'react';

export default class Food extends Component {
  state = {
    quantity: this.props.food.quantity,
    name: this.props.food.name,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps !== this.props) {
      this.setState({
        quantity: this.props.food.quantity,
        name: this.props.food.name,
        calories: this.props.food.calories,
      });
    }
  }

  submitForm = (event) => {
    event.preventDefault();
    if (this.state.quantity > 0)
      this.props.addFood({ ...this.props.food, quantity: this.state.quantity });
  };

  onChange = (event) => {
    let { value } = event.target;
    console.log(value);

    this.props.updateQty(value, this.props.id);

    this.setState({
      quantity: value,
    });
  };

  render() {
    console.log(
      'FINAL STATE',
      this.state,
      'FINAL PROPS',
      this.props,
      'TEST',
      this.test
    );
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.food.image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  min="1"
                  value={this.state.quantity}
                  onChange={this.onChange}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.submitForm}>
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
