import React from 'react';

export default class FoodBox extends React.Component {
  state = {
    quantity : 1
  }

  handleChange = (event) => {
    this.setState({
      quantity: event.target.value
    })
  }

  handleClick = (food) => {
    food.quantity = this.state.quantity

    this.props.add(food)
  }


  render() {
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
                  value = {this.state.quantity}
                  name={this.props.food.name}
                  min="0"
                />
              </div>
              <div className="control">
                <button
                  onClick={() => this.handleClick(this.props.food)}
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
