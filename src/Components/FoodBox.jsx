import React from 'react';
import 'bulma/css/bulma.css';
import { Component } from 'react';
//import Form from '../Components/Form.jsx';
import SearchBar from '../Components/SearchBar';

class FoodBox extends Component {
  // state = {
  //   food: foods,
  // };

  render() {
    return (
      <div>
        <div>
          {/* <h1 style={{ fontWeight: 'bold', fontSize: '30px' }}>
            IronNutrition
          </h1> */}
        </div>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.food.image} />
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
                    className="input"
                    type="number"
                    // value={this.props.food.quantity}
                  />
                </div>
                <div className="control">
                  <button className="button is-info">+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
        {/* ))} */}
      </div>
    );
  }
}
export default FoodBox;
