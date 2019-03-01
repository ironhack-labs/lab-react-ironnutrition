import React, { Component } from "react";

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodArray: this.props.food,
    };
  }

  render() {
    return (
      <div className="foodList">
        {this.state.foodArray.map((oneFood, index) => {
          //Este es el return del arrow function

          return (
            <div className="box" key={index}>
              <article className="media" key={index}>
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img alt={oneFood.name} src={oneFood.image} />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{oneFood.name}</strong> <br />
                      <small>{oneFood.calories} Cal</small>
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
                        readOnly
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
