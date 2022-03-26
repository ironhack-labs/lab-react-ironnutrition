import React, { useState } from 'react';
const FoodBox = ({ food, calculateCalories }) => {
  const { calories, image, name, quantity } = food;

  const [newQuantitiy, setNewQuantitiy] = useState(food);

  const handleOnChange = (data) => {
    const { value } = data.target;
    setNewQuantitiy({ ...newQuantitiy, quantity: Number(value) });
  };

  return (
    <div className="box mb-3">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right ">
          <div className="field has-addons ">
            <div className="control">
              <input
                className="input"
                type="number"
                min={0}
                value={newQuantitiy.quantity}
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <div className="control">
              <button
                className="button is-info"
                onClick={() => calculateCalories(newQuantitiy)}
              >
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
