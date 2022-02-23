import React, { useState } from 'react';
import './FoodBox.css';

export default function FoodBox(props) {
  const { onAdd, food } = props;
  const [quantity, setQuantity] = useState(food.quantity);

  const handleOnAdd = () => {
    const foodItem = { ...food, quantity };
    onAdd(foodItem);
  };
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            {food.image ? (
              <img src={food.image} alt={food.name} />
            ) : (
              <img src="https://via.placeholder.com/100x100" alt="" />
            )}
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
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={handleOnAdd}>
                +
              </button>
              <button
                onClick={() => props.onDelete(food.name)}
                className="FoodBox-btn"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
