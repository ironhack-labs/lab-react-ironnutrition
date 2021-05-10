import { render } from '@testing-library/react';
import React, { Component } from 'react';

export default class FoodBox extends Component {
  state = {
    quantity: this.props.quantity
  }
   handleChange = (event) => {
     const { value } = event.target;
     
     this.setState({ quantity: value });
    //  this.props.addToday(event.target.id, this.state.quantity);
     

    
        
  }
  render() {
    const { id, food, calories, image, addToday } = this.props;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food}</strong> <br />
                <small>{calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={this.state.quantity}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div className="control">
                <button
                  id={id}
                  onClick={(event) => addToday(event.target.id, this.state.quantity)}
                  className="button is-info"
                >
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



