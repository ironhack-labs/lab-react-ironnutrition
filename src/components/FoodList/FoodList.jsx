import React, { useState } from 'react';

const FoodList = (props) => {
  const [quantity, setQuantity] = useState(1);

  const addSelectedFood = (food) => {
    food.quantity += parseInt(quantity);
    props.handleAddSelectedFood(food);
  };

  return (
    <div className="box columns is-vcentered">
      <div className="column">
        <img src={props.food.image} alt="food"></img>
      </div>
      <div className="column">
        <p>
          <strong>{props.food.name}</strong>
        </p>
        <p>Calories: {props.food.calories}</p>
      </div>
      <div className="column">
        <input
          className="input"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        ></input>
      </div>
      <div className="column is-narrow">
        <button onClick={() => addSelectedFood(props.food)} className="button is-primary">
          +
        </button>
      </div>
    </div>
  );
};

export default FoodList;
