import React, { Component } from 'react';
import 'bulma/css/bulma.css';


class FoodBox extends Component {
  state = {
    quantity: "",
  }

  handleInput(event) {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    let { image, name, calories, addFoodToday } = this.props;
    let { quantity } = this.state;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={ image } alt="food"/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{ name }</strong> <br />
                <small>{ calories } cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  id="quantity"
                  name="quantity"
                  type="number" 
                  value={ quantity }
                  onChange={(e) => this.handleInput(e)}
                  placeholder="0"
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={ () => addFoodToday({name, calories, image, quantity}) } > + </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;