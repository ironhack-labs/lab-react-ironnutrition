import React, { useState } from 'react';

const FoodBox = (props) => {
  const { name, image, calories } = props;
  const initialState = {
    name,
    calories,
    quantity: 0,
  };
  const [currentFood, setCurrentFood] = useState(initialState);
  const handleChange = (event) => {
    setCurrentFood({
      ...currentFood,
      quantity: event.target.value,
    });
  };
  const handleClick = () => props.handleAddTodayFood(currentFood);
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt="food" />
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
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                name={props.name}
                value={currentFood.quantity}
                onChange={handleChange}
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
  );
};

export default FoodBox;