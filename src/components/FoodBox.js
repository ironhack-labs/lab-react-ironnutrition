import React from 'react';
import foods from '../foods.json';

function FoodBox(props, index, toAdd) {
  let foodSelected = foods.filter(item => item.name === props.food);

  return (
    <div className="box" key={foodSelected[0].name}>
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={foodSelected[0].image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{foodSelected[0].name}</strong> <br />
              <small>{foodSelected[0].calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value={foodSelected[0].quantity} />
            </div>
            <div className="control">
              <button className="button is-info" onClick={() => toAdd(index)}>+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default FoodBox;
