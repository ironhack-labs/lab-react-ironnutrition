import React, { useState, useContext } from "react";
import { FoodContext } from "./FoodContext";

const FoodBox = ({ food }) => {
  const { addFood } = useContext(FoodContext);
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = event => setQuantity(event.target.value);
  const handleAddFood = () =>
    addFood({
      name: food.name,
      quantity: +quantity,
      calories: food.calories * quantity
    });

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.image} alt={food.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.calories} cal</small>
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
                min="0"
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={handleAddFood}>
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
