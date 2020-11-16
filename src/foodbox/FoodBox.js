import React from 'react';
import './FoodBox.css';


export const arrayTotal = []




function FoodBox(props) {




  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.img} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.name}</strong> <br />
              <small>Calories: {props.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="Quantity"
                value="1"
              />
            </div>
            <div className="control">
              <button
                className="button is-info"
                onClick={() =>
                  arrayTotal.push(props.calories, props.name)
                }
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

export default FoodBox;
