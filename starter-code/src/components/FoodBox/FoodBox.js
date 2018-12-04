import React, { Component } from "react";

export default class FoodBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.foods.map((elem, i) => (
          <div className="box" key={i}>
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={elem.image} alt={elem.name} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{elem.name}</strong> <br />
                    <small>{elem.calories}</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      defaultValue="1"
                    />
                  </div>
                  <div className="control">
                    <button className="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
