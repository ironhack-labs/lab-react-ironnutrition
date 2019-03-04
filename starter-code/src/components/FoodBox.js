import React from "react";
import "./FoodBox.css";

class FoodBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { food: props.food };
  }

  render() {
    return (
      <div>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.state.food.image} alt={this.state.food.name} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.state.food.name}</strong> <br />
                  <small>{this.state.food.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    value="1"
                  />
                </div>
                <div className="control">
                  <button className="button is-info" onClick={() => this.handleClick} > + </button>
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
