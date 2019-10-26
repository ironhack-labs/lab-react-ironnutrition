import React, { Component } from "react";
import "bulma/css/bulma.css";

class FoodBox extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 0
    };
  }

  changeHandler = e => {
    let { value } = e.target;
    if (value >= 0) {
      this.setState({
        quantity: value,
        displayTodayFoods: false
      });
    }
  };

  onPlus = e => {
    this.props.onPlus(
      this.props.name,
      this.props.calories,
      this.state.quantity
    );
  };

  show = () => {
    this.setState({
      displayTodayFoods: true
    });
  };

  hide = () => {
    this.setState({
      displayTodayFoods: false
    });
  };

  render() {
    return (
      <div className="column is-half">
        <div className="box">
          <article className="media">
            {/* IMAGE */}

            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.image} alt="" />
              </figure>
            </div>

            {/* FOOD INFO */}

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
                {/* QUANTITY */}

                <div className="control">
                  <input
                    className="input"
                    name="quantity"
                    type="number"
                    value={this.state.quantity}
                    onChange={e => this.changeHandler(e)}
                  />
                </div>

                {/* BUTTON */}

                <div className="control">
                  <button onClick={this.onPlus} className="button is-info">
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default FoodBox;
