import React, { Component } from "react";
import AddButton from "./AddButton";

class Foodbox extends Component {
  state = {
    quantity: 1,
    food: this.props.food
  };

  handleInputChange = e => {
    this.setState({
      quantity: e.target.value
    });
  };

  addItem = () => {
    this.props.addItemFunction(this.state);
  };

  render() {
    return (
      <div className="box">
        <article className="media" key={this.key}>
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.food.image} alt="" />
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
                  name="quantity"
                  className="input"
                  type="number"
                  defaultValue="1"
                  min="0"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="control">
                <AddButton addItem={this.addItem} />
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Foodbox;
