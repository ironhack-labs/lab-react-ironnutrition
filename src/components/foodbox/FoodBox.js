import React, { useState } from 'react';
import 'bulma/css/bulma.css';

function FoodBox(props) {
  const [value, setValue] = useState(0);

  function handleClick() {
    let calories = props.valueAdd;
    let newFoods = [...props.stateAdd];
    newFoods.push({
      name: props.name,
      calories: props.calories * value,
      quantity: value,
      image: props.image,
    });
    calories += value * props.calories;
    props.setValueAdd(calories);
    props.setStateAdd(newFoods);
  }

  function handleChange(event) {
    const amount = event.currentTarget.value;
    setValue(amount);
  }

  return (
    <div>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={props.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{props.name}</strong> <br />
                <small>{props.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  onChange={handleChange}
                  type="number"
                  value={value}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={handleClick}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default FoodBox;
