import React, { Component } from 'react';


class FoodBox extends Component {
    state = {
      quantity: 0,
      }

    // method to push new food to the array  
    render() {
        return (<div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.foodObj.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.foodObj.name}</strong> <br />
                <small>{this.props.foodObj.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value="1" />
              </div>
              <div className="control">
                <button className="button is-info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div> 
        )
    }
}

export default FoodBox; 