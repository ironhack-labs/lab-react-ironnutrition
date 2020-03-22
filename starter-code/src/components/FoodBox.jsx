import React, { useState } from "react";

const FoodBox = ({ today, setToday, ...rest }) => {
  const [foodAmount, setFoodAmount] = useState(1);
  const food = { ...rest };

  const addToday = () => {
    const inList = today.find(item => item.name === food.name);
    if (inList) {
      return today.map(item => {
        if (item.name === food.name) {
          console.log("AMOUNTS", item.amount, foodAmount);
          return { ...item, amount: Number(item.amount) + Number(foodAmount) };
        } else return item;
      });
    } else {
      console.log("ELSE IN ADD");
      return [...today, { ...food, amount: foodAmount }];
    }
  };

  const handleAdd = () => {
    setToday(addToday);
    setFoodAmount(1);
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong>
              <small>{food.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input type="number" className="input amount-input" value={foodAmount} onChange={e => setFoodAmount(e.target.value)} />
            </div>
            <div className="control">
              <button className="button is-info" onClick={handleAdd}>
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
