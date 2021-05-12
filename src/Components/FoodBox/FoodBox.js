import React from 'react';

import './FoodBox.css';

class FoodBox extends React.Component {
  state = {
    quantity: 1,
  };

  updateInput = (e) => {
    console.log(this.state.quantity);
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state.quantity);
  };

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt="I AM THE PANTS" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
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
                  onChange={this.updateInput}
                  name="quantity"
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
  }
}

export default FoodBox;
