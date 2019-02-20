import React, { Component } from "react";
import foods from "./foods.json";

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = { foodArray: foods };
  }

  addNewFood(foodObject) {
    const foods = this.state.foodArray;
    foods.unshift(foodObject);
    this.setState({ foodArray: foods });
  }

  render() {
    const { foodArray } = this.props;

    return (
      <div>
        {foodArray.map((oneFood, index) => {
          return (
            <div className="box" key={oneFood.name}>
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={oneFood.image} />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{oneFood.name}</strong> <br />
                      <small>{oneFood.calories}</small>
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <div className="field has-addons">
                    <div className="control">
                      <input
                        className="input"
                        type="number"
                        value={oneFood.quantity}
                      />
                    </div>
                    <div className="control">
                      <button className="button is-info">+</button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FoodBox;
