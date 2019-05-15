import React, { Component } from "react";

class Foodbox extends Component {
  state = {
    name: this.props.food,
    calories: 0,
    quantity: 0
  }

  addItems = (e) => {

    this.props.addItemsToAppJSState(this.state)
    console.log(this.state)
  }
  updateItems = (e) => {
      this.setState({
        quantity:e.target.value,
        calories:e.target.value*this.props.calories
    });
  
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.imageurl} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.food}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" onChange={this.updateItems} />
              </div>
              <div className="control">
                <button name={this.props.value} className="button is-info" onClick={this.addItems}>+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Foodbox
