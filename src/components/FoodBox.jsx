import React from 'react';
import { useState } from 'react';

const FoodBox = (props) => {
  const [quantity, setQuantity] = useState(0);

  const inputChangeHandler = (event) => {
    setQuantity(event.target.value);
  };
  const onSubmitHandler = () => {
    const foodObj = {
      name: props.food.name,
      calories: props.food.calories,
      quantity: quantity,
    };
    props.onSubmitCall(foodObj);
  };
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.food.image} alt="" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.food.name}</strong> <br />
              <small>{props.food.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div>
              <input onChange={inputChangeHandler} type="number" />
            </div>
            <div>
              <button onClick={onSubmitHandler}>+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
