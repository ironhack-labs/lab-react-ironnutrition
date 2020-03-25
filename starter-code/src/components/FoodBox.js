import React, { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { FoodContainer } from "../components/UI/FoodContainer";

export const FoodBox = props => {
  const { foodList } = useContext(DataContext);
  const [count, setCount] = useState(0);

  const handleAdd = (name, e) => {
    setCount(
      foodList.map(food => {
        if (food.name === name) food.quantity = e.target.value;
        return food;
      })
    );
  };

  return (
    <>
      {foodList.map((food, i) => (
        <FoodContainer key={i}>
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} title={food.name} name={food.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong>
                <br />
                <small>{food.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="control">
              <input
                className="input"
                type="number"
                value={food.quantity}
                onChange={e => handleAdd(food.name, e)}
              />
            </div>
            <div className="control">
              <button className="button is-info">+</button>
            </div>
          </div>
        </FoodContainer>
      ))}
    </>
  );
};
