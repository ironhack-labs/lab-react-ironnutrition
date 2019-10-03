import React, { Component } from "react";

export default class FoodBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      calories: this.props.calories,
      qty: 1
    }
  }

  addFoodQty(e) {
    this.setState({
      ...this.state,
      qty: e.target.value
    })
  }

  addFoodToSummary(e) {
    e.preventDefault();
    this.props.updateSummary(this.state)
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt={this.props.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" 
                  value={this.state.qty} 
                  onChange={e => this.addFoodQty(e)} />
              </div>
              <div className="control">
                <button className="button is-info" onClick={(e) => this.addFoodToSummary(e)}>+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
