import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

class FoodBox extends Component {
  state = {
    value: 1
  }
  valueChange = (e) => {
    this.setState({
        value: e.target.value
    })
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.img} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.foodName}</strong> <br />
                <small>{this.props.foodCalories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number" 
                  value={this.state.value}
                  onChange={(e) => this.valueChange(e)}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={() => this.props.addItem(this.state.value)}>
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