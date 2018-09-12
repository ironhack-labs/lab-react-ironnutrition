import React, { Component } from 'react';

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    // console.log('food: ', this.props.food);

    this.props.onClick(e, this.props.food, this.state.quantity);
  }
  handleChange(e) {
    // console.log('food: ', this.props.food);
    this.setState({
      quantity: e.target.value
    });
    this.props.onChange(e);
  }

  render() {
    return (
      <div className="box" key={this.props.i}>
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.food.image} alt="this is food" />
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
                  name="quantity"
                  value={this.state.quantity}
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={e => this.handleClick(e)}>
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
