import React, { Component } from "react";

export default class FoodBox extends Component {
  constructor() {
    super();

    this.state = {
      quantity: 1
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" name="quantity" type="number" min='1' value={this.state.quantity} onChange={e => this.handleChange(e)} />
              </div>
              <div className="control">
                <button className="button is-info" onClick={(e) => this.props.addToCart(this.props.name, this.props.calories, this.state.quantity)}>+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
