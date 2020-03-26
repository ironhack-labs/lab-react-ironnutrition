import React, { useState, useContext } from "react";

import { FoodsContext } from "../../context/Context";

export const FoodItem = ({ thisFood }) => {
  const { addTodayFoods } = useContext(FoodsContext);

  const [quantity, setQuantity] = useState(1);
  const handleQuantity = e => setQuantity(e.target.value);

  const handleAddFood = () => {
    const newTodayFood = {
      name: thisFood.name,
      quantity: +quantity,
      calories: thisFood.calories * quantity
    };
    addTodayFoods(newTodayFood);
  };

  return (
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={thisFood.image} alt={thisFood.name} />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{thisFood.name} </strong> <br />
            <small>{thisFood.calories} cal</small>
          </p>
        </div>
      </div>
      <div className="media-right">
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="number"
              value={quantity}
              onChange={handleQuantity}
            />
          </div>
          <div className="control">
            <button onClick={handleAddFood} className="button is-info">
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
