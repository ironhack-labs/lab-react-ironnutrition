import React, { PureComponent } from 'react';
import foodsJSON from '../foods.json';

export class FoodBox extends PureComponent {
  state = {
    listOfFood: foodsJSON,
  };

  render() {
    return (
      <div className="box">
        <button>Add</button>

        {this.state.listOfFood.map((food, i) => (
          <article key={i} className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={food.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{food.name}</strong> <br />
                  <small>{food.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    value={food.quantity}
                  />
                </div>
                <div className="control">
                  <button className="button is-info">+</button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    );
  }
}

export default FoodBox;
