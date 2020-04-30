import React, { Component } from "react";
import "bulma/css/bulma.css";

class FoodBox extends Component {
  constructor(props) {
    super(props);
    const { image, name, calories, quantity } = this.props;
    this.state = {
      image,
      name,
      calories,
      quantity: 1
    };

    this.todaysFoodHandler = this.todaysFoodHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  todaysFoodHandler() {
    this.props.todaysFood(this.state);

    this.setState({
      quantity: 1
    })
  }

  handleChange(e) {
    let { name, value } = e.target;

    if (name === "calories" || name === "quantity") {
      value = +value;
    }

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { image, name, calories, quantity } = this.props;

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt="imagessss" />
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
                <input
                  className="input"
                  type="number"
                  name="quantity"
                  value={this.state.quantity}
                  onChange={this.handleChange}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={this.todaysFoodHandler}
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

export default FoodBox;
