import React, { Component } from 'react';

export default class FoodBox extends Component {
  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.foodType}</strong> <br />
                <small>{this.props.calories}</small>
              </p>
            </div>
          </div>

          <form>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    
                    name={this.props.foodType}
                    onChange={this.props.handleQuantity}
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={this.props.addFood}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </form>
        </article>
      </div>
    );
  }
}
