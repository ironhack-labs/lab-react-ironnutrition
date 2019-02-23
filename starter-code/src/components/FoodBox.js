import React, { Component } from 'react';

class FoodBox extends Component {

  handleChange() {

  }

  render() {
    return (
      <div className="FoodBox">
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.food.image} alt="food"/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.food.name}</strong> <br />
                  <small>{this.props.food.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    onChange={this.handleChange}
                    className="input"
                    type="number" 
                    value="1"
                  />
                </div>
                <div className="control">
                  <button onClick={e => this.addFood(e)} className="button is-info">
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