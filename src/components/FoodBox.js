import React, { Component } from 'react';

export default class FoodBox extends Component {
  render() {
    const { eachDish } = this.props;
    
    return (
      <div>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={eachDish.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{eachDish.name}</strong> <br />
                  <small>{eachDish.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" placeholder="1" />
                </div>
                <div className="control">
                  <button className="button is-info" onAddToday={() => { this.props.onAddToday()  } }>+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
