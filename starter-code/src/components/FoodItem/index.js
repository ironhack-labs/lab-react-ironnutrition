import React, { useState, useContext } from "react";

import { FoodsContext } from "../../context/Context";

export const FoodItem = ({ thisFood }) => {
  const { addTodayFoods } = useContext(FoodsContext);
  const [value, setQuantity] = useState(1);

  const handleNewFood = food => {
    food.quantity = value;
    addTodayFoods(food);
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
              value={value}
              onChange={e => setQuantity(e.target.value)}
            />
          </div>
          <div className="control">
            <button
              onClick={() => handleNewFood(thisFood)}
              className="button is-info"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
