import React, { Component } from "react";
import shortid from "shortid";

export default class TodayFoodBox extends Component {
  state = {
    id: this.props.food.id,
    name: this.props.food.name,
    calories: this.props.food.calories,
    image: this.props.food.image,
    quantity: this.props.food.quantity
  };
  handleChange = e => {
    let { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newTodayFood = this.state;
    // rewrites the Food ID
    //newTodayFood.id = shortid.generate();

    this.props.addTodayFood(newTodayFood);
    
    this.setState({
      id: this.props.food.id,
      name: this.props.food.name,
      calories: this.props.food.calories,
      image: this.props.food.image,
      quantity: this.props.food.quantity
    });
  };

  render() {
    return (
        <div className="box" key={this.state.id}>
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.state.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.state.name}</strong> <br />
                  <small>{this.state.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    name="quantity"
                    type="number"
                    value={this.state.quantity}
                    onChange={this.handleChange}
                  />
                </div>
                {/* <div className="control">
                  <button
                    className="button is-info"
                    onClick={this.handleSubmit}
                  >
                    +
                  </button>
                </div> */}
              </div>
            </div>
          </article>
        </div>
      
    );
  }
}
